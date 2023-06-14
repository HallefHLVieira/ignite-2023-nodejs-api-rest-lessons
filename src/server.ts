// import para envs
import { app } from './app'
import { env } from './env'

// config port listener para o web-server
app
  .listen({
    host: '0.0.0.0',
    port: env.APP_PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
