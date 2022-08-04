import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Test endpoints responses', () => {
  it('test the home endpoint', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })

  it('test images endpoint with no params', async () => {
    const response = await request.get('/api/images')
    expect(response.status).toBe(400)
  })

  it('test images endpoint with missing width and height', async () => {
    const response = await request.get('/api/images?filename=icelandwaterfall')
    expect(response.status).toBe(400)
  })

  it('test images endpoint with wrong file name', async () => {
    const response = await request.get('/api/images?filename=dubai')
    expect(response.status).toBe(400)
  })

  it('test images endpoint with correct params', async () => {
    const response = await request.get(
      '/api/images?filename=icelandwaterfall&width=250&height=250'
    )
    expect(response.status).toBe(200)
  })
})
