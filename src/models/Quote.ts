import mongoose from '@database/index'
import IQuote from '@interfaces/quote'

// Create a Schema corresponding to the document interface.
const QuoteSchema = new mongoose.Schema<IQuote>({
    author: {
        type: 'string',
        required: true
    },
    authorslug: {
        type: 'string',
        required: true
    },
    category: {
        type: 'string',
        required: true
    },
    categoryslug: {
        type: 'string',
        required: true
    },
    text: {
        type: 'string',
        required: true
    }
}, { collection: 'Quotes' })

// Create a Model.
const Quote = mongoose.model<IQuote>('Quote', QuoteSchema)

export default Quote
