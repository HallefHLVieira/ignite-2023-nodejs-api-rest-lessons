// importando o query builder para conexão com banco de dados
import { knex as setupKnex, Knex } from 'knex'

// importando arquivo de envs
import { env } from './env'

// configurando conexão com banco de dados
export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

// exportando suposto driver de conexão
export const knex = setupKnex(config)
