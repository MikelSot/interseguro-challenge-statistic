import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import InitRouter from './infrastructure/handler/router'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(morgan('combined'))
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || '*',
    methods: (process.env.CORS_METHODS || 'GET,POST').split(','),
  })
)
app.use(express.json())

InitRouter({ App: app })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
