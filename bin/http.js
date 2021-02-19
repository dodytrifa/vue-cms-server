require('dotenv').config()
const app = require('../app')
const port = 3000
// const routes = require('../routes/index')

// app.use(routes)

console.log(process.env.NODE_ENV);
app.listen(port, () => {
    console.log('run on port', port);
})