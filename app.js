const express = require('express')
const app = express()
const port = 3000



const { userRouter } = require('./scr/rotas/users')
const { toDoRouter } = require('./scr/rotas/todo')


app.get('/', (req, res) => {
  res.send('Aoba')
})
app.use('/user', userRouter)
app.use('/todo', toDoRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

