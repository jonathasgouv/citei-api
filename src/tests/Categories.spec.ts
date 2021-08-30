import request from 'supertest'
import app from '../app'

describe('Test categories routes', () => {
    it('Should get authors', async () => {
        const res = await request(app).get('/api/categories/')

        expect(res.body).toHaveLength(20)
    })
    it('Should get quotes by category', async () => {
        const res = await request(app).get('/api/categories/aniversario-marido')

        expect(res.body).toHaveLength(20)
    })
})
