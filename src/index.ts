import express from 'express'
import cors from 'cors'

import InitRouter from './infrastructure/handler/router'

const PORT = 3000

const app = express()

app.use(cors())
app.use(express.json())

InitRouter({ App: app })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
