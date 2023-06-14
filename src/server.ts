// import para envs
import { app } from './app'
import { env } from './env'

// config port listener para o web-server
app
  .listen({
    port: env.APP_PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
