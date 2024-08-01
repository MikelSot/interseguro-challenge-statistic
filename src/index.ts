import express from 'express'
import InitRouter from './infrastructure/handler/router'

const PORT = 3000

const app = express()

app.use(express.json())

InitRouter({ App: app })

app.listen(PORT, () => {
  console.log('Server is running on port 3000')
})
