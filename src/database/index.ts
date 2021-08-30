import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODBURL, { useNewUrlParser: true })
mongoose.Promise = global.Promise

export default mongoose
