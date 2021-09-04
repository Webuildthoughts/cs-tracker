import mongoose from 'mongoose'

const subjectTopicsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  questionsCount: {
    type: Number,
    required: true,
  },
  subject: {
    type: Schema.Types.ObjectId,
    ref: 'Subjects',
  },
})

module.exports = mongoose.model('SubjectTopics', subjectTopicsSchema)
