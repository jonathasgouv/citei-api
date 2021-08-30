import express from 'express'
import QuotesController from '@controllers/QuotesController'

const router = express.Router()

/// USER ROUTES ///

// GET request to list all authors.
router.get('/', QuotesController.get)

// GET request to list quotes by author.
router.get('/random', QuotesController.getRandom)

// GET request to list quotes by author.
router.get('/:id', QuotesController.getById)

export default router
