import express from 'express'
import mongoose from 'mongoose'
import configureRoutes from './routes/routes-config.js'
import 'dotenv/config'

const app = express()

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log('Connected to mongoDB')
})

configureRoutes(app)

app.listen(5000, (err) => {
  if (err) console.error(err)
  console.log('server started at port 5000')
})
