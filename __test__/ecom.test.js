const request = require('supertest')
const app = require('../app')

describe('GET /products', function () {
  it('should return status 200', function (done) {
    request(app)
      .get('/products')
      .set('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAbWFpbC5jb20iLCJpYXQiOjE2MTM0ODM0MTh9.VMjCe9Wl2tPZ12ugpNl5DDoqO75HPGD6zJi3SfnlYPU")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toEqual(200)
          expect(Array.isArray(res.body)).toEqual(true)
          done()
        }
      })
  })
})

describe('POST /products', function () {
  it('should return status 201', function (done) {
    let body = {
      name: "gadget",
      image_url: "link gambar",
      price: 500000,
      stock: 10
    }
    request(app)
      .post('/products')
      .send(body)
      .set('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAbWFpbC5jb20iLCJpYXQiOjE2MTM0ODM0MTh9.VMjCe9Wl2tPZ12ugpNl5DDoqO75HPGD6zJi3SfnlYPU")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toEqual(201)
          expect(typeof res.body).toEqual('object')
          expect(res.body).toHaveProperty('id')
          expect(res.body).toHaveProperty('name')
          expect(res.body).toHaveProperty('image_url')
          expect(res.body).toHaveProperty('price')
          expect(res.body).toHaveProperty('stock')
          expect(res.body).toHaveProperty('createdAt')
          expect(res.body).toHaveProperty('updatedAt')
          expect(typeof res.body.id).toEqual('number')
          expect(res.body.name).toEqual(body.name)
          expect(res.body.image_url).toEqual(body.image_url)
          expect(res.body.price).toEqual(body.price)
          expect(res.body.stock).toEqual(body.stock)
          expect(typeof res.body.createdAt).toEqual('string')
          expect(typeof res.body.updatedAt).toEqual('string')
          done()
        }
      })
  })
})

describe('PUT /products', function () {
  it('should return status 200', function (done) {
    let body = {
      name: "gadget",
      image_url: "link gambar",
      price: 500000,
      stock: 10
    }
    request(app)
      .put('/products/1')
      .send(body)
      .set('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAbWFpbC5jb20iLCJpYXQiOjE2MTM0ODM0MTh9.VMjCe9Wl2tPZ12ugpNl5DDoqO75HPGD6zJi3SfnlYPU")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toEqual(200)
          expect(typeof res.body).toEqual('object')
          expect(res.body).toHaveProperty('id')
          expect(res.body).toHaveProperty('name')
          expect(res.body).toHaveProperty('image_url')
          expect(res.body).toHaveProperty('price')
          expect(res.body).toHaveProperty('stock')
          expect(res.body).toHaveProperty('createdAt')
          expect(res.body).toHaveProperty('updatedAt')
          expect(typeof res.body.id).toEqual('number')
          expect(res.body.name).toEqual(body.name)
          expect(res.body.image_url).toEqual(body.image_url)
          expect(res.body.price).toEqual(body.price)
          expect(res.body.stock).toEqual(body.stock)
          expect(typeof res.body.createdAt).toEqual('string')
          expect(typeof res.body.updatedAt).toEqual('string')
          done()
        }
      })
  })
})

describe('DELETE /products', function () {
  it('should return status 200', function (done) {

    request(app)
      .delete('/products/1')

      .set('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAbWFpbC5jb20iLCJpYXQiOjE2MTM0ODM0MTh9.VMjCe9Wl2tPZ12ugpNl5DDoqO75HPGD6zJi3SfnlYPU")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toEqual(200)
          done()
        }
      })
  })
})