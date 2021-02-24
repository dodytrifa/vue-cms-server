let env = process.env.NODE_ENV

// if (env === 'development' || env === 'test') {
//     require('dotenv').config()
// }

const express = require('express')
const app = express()
const routes = require('./routes/index')
const cors = require('cors')
const errorHandler = require('./midwares/errHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)
app.use(errorHandler)
app.use((err, req, res, next) => {
    console.log(err);
})

module.exports = app

