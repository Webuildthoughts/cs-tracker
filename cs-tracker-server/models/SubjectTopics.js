const {mongoose,Schema,ObjectId}=require('./utils/ShemaUtils')

const subjectTopicsSchema = Schema({
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
    type:ObjectId,
    ref: 'Subjects',
  },
})

module.exports = mongoose.model('SubjectTopics', subjectTopicsSchema)
