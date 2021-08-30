import Quote from '@models/Quote'
import { Request, Response } from 'express'

export default {
    get: async (req: Request, res: Response) => {
        try {
            const offset = parseInt(req.query.offset as string) || 0
            const count = Math.min(parseInt(req.query.count as string), 100) || 20

            const response = await Quote.find({}).skip(offset).limit(count)

            return res.json(response)
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' })
        }
    },
    getById: async (req: Request, res: Response) => {
        try {
            const id = req.query.id as string

            if (!id) {
                res.status(400).json({ error: 'Id is required' })
            }

            const response = await Quote.findById(id)

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' })
        }
    },
    getRandom: async (req: Request, res: Response) => {
        try {
            const count = Math.min(parseInt(req.query.count as string), 100) || 20

            const response = await Quote.aggregate([{ $sample: { size: count } }])

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' })
        }
    }
}
