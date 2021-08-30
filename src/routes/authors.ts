import express from 'express'
import AuthorsController from '@controllers/AuthorsController'

const router = express.Router()

/// USER ROUTES ///

// GET request to list all authors.
router.get('/', AuthorsController.get)

// GET request to list quotes by author.
router.get('/:author', AuthorsController.getBy)

export default router
