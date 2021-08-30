import express from 'express'

require('dotenv').config()

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

app.listen(3333)
