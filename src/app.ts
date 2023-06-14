// import fastify para criação do web-server
import fastify from 'fastify'

//
import cookie from '@fastify/cookie'

// importanto arquivo de rotas
import { transactionsRoutes } from './routes/transactions'

// criando web-server
export const app = fastify()

app.register(cookie)

// registrando o arquivo de rotas como plugin do fastify e adicionando o prefixo das rotas
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
