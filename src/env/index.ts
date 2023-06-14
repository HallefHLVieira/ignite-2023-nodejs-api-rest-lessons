// dotenv nos permite conectar a variavel global do node
import { config } from 'dotenv'
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' })
} else {
  config()
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  APP_PORT: z.number().default(3333),
})

// usando a função safeParse para verificar se todas as envs estão devidamente preencidas e tipadas
const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('# Invalid environment variables!', _env.error.format())

  throw new Error('Invalid environment variables!')
}

// exportando as envs para uso na aplicação
export const env = _env.data
