const request = require('supertest')
const app = require('../app')


describe('POST/ register', () => {
    it('should send an object with status code 201', (done)=> {
      let body = {
        email: 'user5@mail.com',
        password: 'passuser5'
      }
      request(app)
      .post('/users/register')
      .send(body)
      .end((err,res)=> {
        if(err) {
          done(err)
        }else {
          expect(err).toBe(null)
          expect(res.body).toHaveProperty('email', body.email)
          expect(res.body).toHaveProperty('id', expect.any(Number))
          expect(res.status).toEqual(201)
          done()
        }
      })
    })
  })
  
  
  describe('POST/ register', () => {
    it('should send an error with status code 400 caused by invalid email format', (done)=> {
      let body = {
        email: 'user',
        password: 'passuser5'
      }
      request(app)
      .post('/users/register')
      .send(body)
      .end((err,res)=> {
        if(err) {
          done(err)
        }else {
          expect(err).toBe(null)
          expect(res.status).toEqual(400)  
          expect(res.body.errors.length).toBeGreaterThan(0)
          expect(res.body.errors).toContain('invalid email format')
          expect(res.body).toHaveProperty('errors',expect.any(Array))
          done()
        }
      })
    })
  })
  
  
  describe('POST/ register', () => {
      it('should send an error with status code 400 caused by invalid password length', (done)=> {
        let body = {
          email: 'user@mail.com',
          password: 'pass'
        }
        request(app)
        .post('/users/register')
        .send(body)
        .end((err,res)=> {
          if(err) {
            done(err)
          }else {
            expect(err).toBe(null)
            expect(res.status).toEqual(400)  
            expect(res.body.errors.length).toBeGreaterThan(0)
            expect(res.body.errors).toContain('password must contain min 6 characters')
            expect(res.body).toHaveProperty('errors',expect.any(Array))
            done()
          }
        })
      })
    })
  
  
  describe('POST/ login', () => {
    it('should send status code 200', (done)=> {
      let body = {
        email: 'admin1@mail.com',
        password: '123451'
      }
      request(app)
      .post('/users/login')
      .send(body)
      .end((err,res)=> {
        if(err) {
          done(err)
        }else {
          expect(err).toBe(null)
          expect(res.status).toEqual(200)
          expect(res.body).toHaveProperty('access_token', expect.any(String)) 
          done()
        }
      })
    })
  })
  
  
  describe('POST/ login', () => {
    it('should send status code 400 caused by invalid email', (done)=> {
      let body = {
        email: 'adminlain@mail.com',
        password: '123451'
      }
      request(app)
      .post('/users/login')
      .send(body)
      .end((err,res)=> {
        if(err) {
          done(err)
        }else {
          expect(err).toBe(null)
          expect(res.status).toEqual(400)
          expect(res.body).toContain('Invalid email or password') 
          done()
        }
      })
    })
  })
  
  
  describe('POST/ login', () => {
    it('should send status code 400 caused by invalid password', (done)=> {
      let body = {
        email: 'admin1@mail.com',
        password: 'passwordlain'
      }
      request(app)
      .post('/users/login')
      .send(body)
      .end((err,res)=> {
        if(err) {
          done(err)
        }else {
          expect(err).toBe(null)
          expect(res.status).toEqual(400)
          expect(res.body).toContain('Invalid email or password') 
          done()
        }
      })
    })
  })