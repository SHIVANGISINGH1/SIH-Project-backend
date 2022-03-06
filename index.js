import express from 'express'
import configureRoutes from './routes/routes-config.js'

const app = express()

configureRoutes(app)

app.listen(5000, (err) => {
  if (err) console.error(err)
  console.log('server start')
})
