import mongoose from 'mongoose'

const subjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  topicsCount: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Subjects', subjectSchema)
