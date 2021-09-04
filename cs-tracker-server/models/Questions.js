import mongoose from 'mongoose'

const questionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: true,
    default: false,
    required: true,
  },
  completionDate: {
    type: Date,
    required: true,
  },
  revisionDate: {
    type: Date,
  },
  subjectTopics: {
    type: Schema.Types.ObjectId,
    ref: 'SubjectTopics',
  },
  profile: {
    type: [Schema.Types.ObjectId],
    ref: 'UserProfile',
  },
})

module.exports = mongoose.model('Questions', questionSchema)
