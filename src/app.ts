import express from 'express'
import cors from 'cors'
import '@config/enviroment'

import swaggerUi from 'swagger-ui-express'

import authorsRouter from '@routes/authors'
import categoriesRouter from '@routes/categories'
import quotesRouter from '@routes/quotes'

import swaggerDocs from '@utils/swagger.json'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/api/authors', authorsRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/quotes', quotesRouter)

export default app
