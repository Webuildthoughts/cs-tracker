const {mongoose,Schema,ObjectId}=require('./utils/ShemaUtils')

const questionSchema = Schema({
question: {    
    type:ObjectId,
    ref: 'Questions',

},
submitedBy:{
    type:ObjectId,
    ref: 'UserProfile'
},
isCompleted: {
    type:Boolean,
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
difficulty: {    
   type: String,
   required: true,
}
})

const SubmissionModel=mongoose.model('Submissions', questionSchema)

module.exports = SubmissionModel