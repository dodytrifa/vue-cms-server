const request = require('supertest')
// const { set } = require('../app')
const app = require('../app')

describe('GET /products', function () {
  it('should return status 200', function (done) {
    request(app)
      .get('/')
      .set('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhZG1pbjFAbWFpbC5jb20iLCJpYXQiOjE2MTM0MDYwNDZ9.RujpH6sdCQ_wNbPpvbC1qwpcNjk_WC9DvfBl9awnRiQ")
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
      .post('/')
      .send(body)
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
      .post('/')
      .send(body)
      .set('access_token', "value token")
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

describe('DELETE /products', function () {
  it('should return status 200', function (done) {

    request(app)
      .delete('/')

      .set('access_token', "value token")
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