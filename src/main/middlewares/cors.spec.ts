import request from 'supertest'
import app from '../config/app'

describe('Cors', () => {
  it('Should verify open cors', async () => {
    app.get('/test_cors', (req, res) => {
      res.send()
    })

    await request(app)
      .get('/test_cors')
      .expect('eccess-control-allow-origin', '*')
      .expect('eccess-control-allow-headers', '*')
      .expect('eccess-control-allow-methods', '*')
  })
})
