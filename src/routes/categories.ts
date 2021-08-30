import express from 'express'
import CategorysController from '@controllers/CategorysController'

const router = express.Router()

/// USER ROUTES ///

// GET request to list all authors.
router.get('/', CategorysController.get)

// GET request to list quotes by author.
router.get('/:category', CategorysController.getBy)

export default router
