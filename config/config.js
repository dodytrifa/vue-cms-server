let env = process.env.NODE_ENV

if (env === 'development' || env === 'test') {
  require('dotenv').config()
}

// require('dotenv').config({ path: _dirname + '/.env' })

module.exports = {
  "development": {
    "username": process.env.USERNAME_DEV,
    "password": process.env.PASSWORD_DEV,
    "database": process.env.DATABASE_DEV,
    "host": process.env.HOST_DEV,
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "postdody",
    "database": "ecom_test",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}