const express = require('express')
const sequelize = require('./config/database')
const { Router } = require('express')

const app = express()
const port = 3000

const router = Router()

// importa a rota corretamente
const { homeRouter } = require('./routes')
const { userRouter } = require('./routes')
const { toDoRouter } = require('./routes')
const sequelize = require('./config/database')

app.get('/', homeRouter)
app.get('/user/:todo', userRouter)
app.get('/todo', toDoRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

sequelize.sync()