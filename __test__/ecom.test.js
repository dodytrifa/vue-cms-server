const request = require('supertest')
const app = require('../app')

describe('GET /products', function () {
    it('status 200', function (done) {
        request(app)
        get('/products')
        end((err, res) => {
            if (err) {
                done(err)
            }
        })

    })
})