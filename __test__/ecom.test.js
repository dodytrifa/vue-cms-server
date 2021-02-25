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

describe('GET /products', function () {
  it('should return status 401 caused by empty token', function (done) {
    request(app)
      .get('/products')
      .set('access_token', "")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toEqual(401)
          expect(typeof res.body).toEqual('object')
          expect(res.body.message).toContain('jwt must be provided')
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

describe('POST /products', function () {
  it('should return status 400 caused by empty token', function (done) {
    let body = {
      name: "gadget",
      image_url: "link gambar",
      price: 500000,
      stock: 10
    }
    request(app)
      .post('/products')
      .send(body)
      .set('access_token', "")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toEqual(401)
          expect(typeof res.body).toEqual('object')
          expect(res.body.message).toContain('jwt must be provided')
          done()
          done()
        }
      })
  })
})

//UNAUTHORIZE
describe('POST /products', function () {
  it('should send an error with status code 400 caused by unauthorized user', function (done) {
    let body = {
      name: "tes input",
      image_url: "link gambar",
      price: 500000,
      stock: 10
    }
    request(app)
      .post('/products')
      .send(body)
      .set('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ1c2VyNUBtYWlsLmNvbSIsImlhdCI6MTYxNDI4MTkxNH0.PhUEEj7wSyA9SQCdYQqoz0iJh4F4W7vhUMUwtPn93Qo")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(err).toBe(null)
          expect(res.status).toEqual(401)
          expect(typeof res.body).toEqual('object')
          expect(res.body.message).toContain('You are not authorize')
          done()
        }
      })
  })
})


describe('POST /products', function () {
    it('should send an error with status code 400 caused by empty name input', function (done) {
      let body = {
        name: "",
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
            expect(err).toBe(null)
            expect(res.status).toEqual(400)
            expect(typeof res.body).toEqual('object')
            expect(res.body.errors).toContain('Product name cannot be empty')
            expect(res.body).toHaveProperty('errors',expect.any(Array))
            done()
          }
        })
    })
  })


  describe('POST /products', function () {
    it('should send an error with status code 400 caused by empty image url', function (done) {
      let body = {
        name: "gadget baru",
        image_url: "",
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
            expect(err).toBe(null)
            expect(res.status).toEqual(400)
            expect(typeof res.body).toEqual('object')
            expect(res.body).toHaveProperty('errors',expect.any(Array))
            expect(res.body.errors).toContain('Image url name cannot be empty')
            done()
          }
        })
    })
  })

describe('POST /products', function () {
  it('should send an error with status code 401 caused by empty price input', function (done) {
    let body = {
      name: "gadget baru",
      image_url: "image_url",
      price: '',
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
          expect(err).toBe(null)
          expect(res.status).toEqual(400)
          expect(typeof res.body).toEqual('object')
          expect(res.body.errors).toContain('Price cannot be empty')
          expect(res.body).toHaveProperty('errors',expect.any(Array))
          done()
        }
      })
  })
})


describe('POST /products', function () {
  it('should send an error with status code 401 caused by empty stock input', function (done) {
    let body = {
      name: "gadget baru",
      image_url: "image_url",
      price: '10000',
      stock: ''
    }
    request(app)
      .post('/products')
      .send(body)
      .set('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAbWFpbC5jb20iLCJpYXQiOjE2MTM0ODM0MTh9.VMjCe9Wl2tPZ12ugpNl5DDoqO75HPGD6zJi3SfnlYPU")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(err).toBe(null)
          expect(res.status).toEqual(400)
          expect(typeof res.body).toEqual('object')
          expect(res.body.errors).toContain('Stock cannot be empty')
          expect(res.body).toHaveProperty('errors',expect.any(Array))
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
      .put('/products/2')
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
          expect(err).toBe(null)
          expect(res.status).toEqual(200)
          expect(res.body.message).toContain("Product Successfully deleted")
          done()
        }
      })
  })
})

describe('DELETE /products', function () {
  it('should return status 401 caused by unauthorize user', function (done) {
    request(app)
      .delete('/products/1')

      .set('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ1c2VyNUBtYWlsLmNvbSIsImlhdCI6MTYxNDI4MTkxNH0.PhUEEj7wSyA9SQCdYQqoz0iJh4F4W7vhUMUwtPn93Qo")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(err).toBe(null)
          expect(res.status).toEqual(401)
          expect(res.body.message).toContain("You are not authorize")
          done()
        }
      })
  })
})


describe('GET /products/id', function () {
  it('should return status 200', function (done) {
    request(app)
      .get('/products/2')
      .set('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAbWFpbC5jb20iLCJpYXQiOjE2MTM0ODM0MTh9.VMjCe9Wl2tPZ12ugpNl5DDoqO75HPGD6zJi3SfnlYPU")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(err).toBe(null)
          expect(res.status).toEqual(200)
          expect(res.body).toHaveProperty('id')
          expect(res.body).toHaveProperty('name')
          expect(res.body).toHaveProperty('image_url')
          expect(res.body).toHaveProperty('price')
          expect(res.body).toHaveProperty('stock')
          expect(res.body).toHaveProperty('createdAt')
          expect(res.body).toHaveProperty('updatedAt')
          expect(typeof res.body.id).toEqual('number')
          expect(typeof res.body.createdAt).toEqual('string')
          expect(typeof res.body.updatedAt).toEqual('string')
          done()
        }
      })
  })
})

describe('GET /products/id', function () {
  it('should return status 401 caused by unauthorize user', function (done) {
    request(app)
      .get('/products/2')

      .set('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ1c2VyNUBtYWlsLmNvbSIsImlhdCI6MTYxNDI4MTkxNH0.PhUEEj7wSyA9SQCdYQqoz0iJh4F4W7vhUMUwtPn93Qo")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(err).toBe(null)
          expect(res.status).toEqual(401)
          expect(res.body.message).toContain("You are not authorize")
          done()
        }
      })
  })
})

describe('PUT /products', function () {
  it('should return status 400 caused by stock amount less than zero', function (done) {
    let body = {
      name: "gadget",
      image_url: "link gambar",
      price: 500000,
      stock: -1
    }
    request(app)
      .put('/products/2')
      .send(body)
      .set('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAbWFpbC5jb20iLCJpYXQiOjE2MTM0ODM0MTh9.VMjCe9Wl2tPZ12ugpNl5DDoqO75HPGD6zJi3SfnlYPU")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toEqual(400)
          expect(typeof res.body).toEqual('object')
          expect(res.body.errors).toContain('Minimum stock must be zero')
          expect(res.body).toHaveProperty('errors',expect.any(Array))
          done()
        }
      })
  })
})

describe('PUT /products', function () {
  it('should return status 401 caused by unauthorize user', function (done) {
    let body = {
      name: "gadget",
      image_url: "link gambar",
      price: 500000,
      stock: 10
    }
    request(app)
      .put('/products/2')
      .send(body)
      .set('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ1c2VyNUBtYWlsLmNvbSIsImlhdCI6MTYxNDI4MTkxNH0.PhUEEj7wSyA9SQCdYQqoz0iJh4F4W7vhUMUwtPn93Qo")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(err).toBe(null)
          expect(res.status).toEqual(401)
          expect(res.body.message).toContain("You are not authorize")
          done()
        }
      })
  })
})

describe('PUT /products', function () {
  it('should return status 400 caused by price amount less than zero', function (done) {
    let body = {
      name: "gadget",
      image_url: "link gambar",
      price: -1,
      stock: 15
    }
    request(app)
      .put('/products/2')
      .send(body)
      .set('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAbWFpbC5jb20iLCJpYXQiOjE2MTM0ODM0MTh9.VMjCe9Wl2tPZ12ugpNl5DDoqO75HPGD6zJi3SfnlYPU")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toEqual(400)
          expect(typeof res.body).toEqual('object')
          expect(res.body.errors).toContain('Minimum price must be zero')
          expect(res.body).toHaveProperty('errors',expect.any(Array))
          done()
        }
      })
  })
})

describe('PUT /products', function () {
  it('should return status 400 caused by empty name input', function (done) {
    let body = {
      name: "",
      image_url: "link gambar",
      price: 10000,
      stock: 15
    }
    request(app)
      .put('/products/2')
      .send(body)
      .set('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAbWFpbC5jb20iLCJpYXQiOjE2MTM0ODM0MTh9.VMjCe9Wl2tPZ12ugpNl5DDoqO75HPGD6zJi3SfnlYPU")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(err).toBe(null)
          expect(res.status).toEqual(400)
          expect(typeof res.body).toEqual('object')
          expect(res.body.errors).toContain('Product name cannot be empty')
          expect(res.body).toHaveProperty('errors',expect.any(Array))
          done()
        }
      })
  })
})

describe('PUT /products', function () {
  it('should return status 400 caused by empty image url input', function (done) {
    let body = {
      name: "contoh nama",
      image_url: "",
      price: 10000,
      stock: 15
    }
    request(app)
      .put('/products/2')
      .send(body)
      .set('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAbWFpbC5jb20iLCJpYXQiOjE2MTM0ODM0MTh9.VMjCe9Wl2tPZ12ugpNl5DDoqO75HPGD6zJi3SfnlYPU")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(err).toBe(null)
          expect(res.status).toEqual(400)
          expect(typeof res.body).toEqual('object')
          expect(res.body.errors).toContain('Image url name cannot be empty')
          expect(res.body).toHaveProperty('errors',expect.any(Array))
          done()
        }
      })
  })
})

describe('PUT /products', function () {
  it('should return status 400 caused by empty price input', function (done) {
    let body = {
      name: "contoh nama",
      image_url: "image",
      price: '',
      stock: '10'
    }
    request(app)
      .put('/products/2')
      .send(body)
      .set('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAbWFpbC5jb20iLCJpYXQiOjE2MTM0ODM0MTh9.VMjCe9Wl2tPZ12ugpNl5DDoqO75HPGD6zJi3SfnlYPU")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(err).toBe(null)
          expect(res.status).toEqual(400)
          expect(typeof res.body).toEqual('object')
          expect(res.body.errors).toContain('Price cannot be empty')
          expect(res.body).toHaveProperty('errors',expect.any(Array))
          done()
        }
      })
  })
})

describe('PUT /products', function () {
  it('should return status 400 caused by empty stock input', function (done) {
    let body = {
      name: "contoh nama",
      image_url: "image",
      price: '100000',
      stock: ''
    }
    request(app)
      .put('/products/2')
      .send(body)
      .set('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAbWFpbC5jb20iLCJpYXQiOjE2MTM0ODM0MTh9.VMjCe9Wl2tPZ12ugpNl5DDoqO75HPGD6zJi3SfnlYPU")
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(err).toBe(null)
          expect(res.status).toEqual(400)
          expect(typeof res.body).toEqual('object')
          expect(res.body.errors).toContain('Stock cannot be empty')
          expect(res.body).toHaveProperty('errors',expect.any(Array))
          done()
        }
      })
  })
})