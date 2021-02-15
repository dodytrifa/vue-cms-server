let env = process.env.NODE_ENV

if (env === 'development' || env === 'test') {
  require('dotenv').config()
}

module.exports = {
  "development": {
    "username": process.env.USERNAME_DEV,
    "password": process.env.PASSWORD_DEV,
    "database": process.env.DATABASE_DEV,
    "host": process.env.HOST_DEV,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.USERNAME_TEST,
    "password": process.env.PASSWORD_TEST,
    "database": process.env.DATABASE_TEST,
    "host": process.env.HOST_TEST,
    "dialect": process.env.DIALECT_TEST
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}