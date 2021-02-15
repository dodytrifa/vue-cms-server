let env = process.env.NODE_ENV

if (env === 'development' || env === 'test') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
// const routes = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(routes)

module.exports = app

