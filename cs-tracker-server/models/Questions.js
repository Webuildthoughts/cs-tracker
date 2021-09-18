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
  linkToQuestion:{
    type:String,
    require:true
  }
  ,
  subjectTopics: {
    type:ObjectId,
    ref: 'SubjectTopics',
    require:true
  },
  profile: {
    type: [ObjectId],
    ref: 'UserProfile',
  },
})
const QuestionModel= mongoose.model('Questions', questionSchema)
module.exports =QuestionModel


