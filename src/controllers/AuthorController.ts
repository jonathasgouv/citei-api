import authors from '@utils/authors.json'
import Quote from '@models/Quote'
import { Request, Response } from 'express'

const authorsList: object[] = authors as []

export default {
    get: async (req: Request, res: Response) => {
        try {
            const offset = parseInt(req.query.offset as string) || 0
            const count = Math.min(parseInt(req.query.count as string), 100) || 20

            const response = authorsList.slice(offset).slice(0, count)

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' })
        }
    },
    getBy: async (req: Request, res: Response) => {
        try {
            const offset = parseInt(req.query.offset as string) || 0
            const count = Math.min(parseInt(req.query.count as string), 100) || 20
            const author = req.query.author as string

            if (!author) {
                res.status(400).json({ error: 'Author slug is required' })
            }

            const response = await Quote.find({ authorslug: author }).skip(offset).limit(count)

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' })
        }
    }
}
