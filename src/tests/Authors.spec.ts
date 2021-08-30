import request from 'supertest'
import app from '../app'

describe('Test authors routes', () => {
    it('Should get authors', async () => {
        const res = await request(app).get('/api/authors/')

        expect(res.body).toHaveLength(20)
    })
    it('Should get quotes by author', async () => {
        const res = await request(app).get('/api/authors/olavo-de-carvalho')

        expect(res.body).toHaveLength(20)
    })
    it('Should get quotes by author using offset and count', async () => {
        const res = await request(app).get('/api/authors/olavo-de-carvalho?offset=10&count=5')

        expect(res.body).toHaveLength(5)
    })
})
