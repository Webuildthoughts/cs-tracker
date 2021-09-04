const {mongoose,Schema,ObjectId}=require('./utils/ShemaUtils')

const questionSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  subjectTopics: {
    type:ObjectId,
    ref: 'SubjectTopics',
  },
  profile: {
    type: [ObjectId],
    ref: 'UserProfile',
  },
})

module.exports = mongoose.model('Questions', questionSchema)
