const express = require('express')
const app = express()
const port = 8080
const Logger = require('./middlewares/Logger')
const userRouter = require('./routers/users-router')
const AddDate = require('./middlewares/addDate')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Logger, AddDate)

app.use('/users', userRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})