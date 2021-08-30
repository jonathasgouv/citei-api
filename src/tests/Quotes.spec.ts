import request from 'supertest'
import app from '../app'

describe('Test quotes routes', () => {
    it('Should get quotes', async () => {
        const res = await request(app).get('/api/quotes/')

        expect(res.body).toHaveLength(20)
    })
    it('Should get quotes using offset and count', async () => {
        const res = await request(app).get('/api/quotes?offset=10&count=5')

        expect(res.body).toHaveLength(5)
    })
    it('Should get quotes by id', async () => {
        const res = await request(app).get('/api/quotes/606944c6a188f95b02109457')

        expect(res.body).toHaveProperty('_id')
    })
    it('Should get random quotes using offset and count', async () => {
        const res = await request(app).get('/api/quotes/random')

        expect(res.body).toHaveLength(20)
    })
    it('Should get quotes using offset and count', async () => {
        const res = await request(app).get('/api/quotes/random?offset=10&count=5')

        expect(res.body).toHaveLength(5)
    })
})
