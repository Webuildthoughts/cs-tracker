const {mongoose,Schema}=require('./utils/ShemaUtils')

const subjectSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  topicsCount: {
    type: Number,
    default:0,
  },
})

const SubjectModel= mongoose.model('Subjects', subjectSchema)
module.exports=SubjectModel