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
difficulty: {    
   type: String,
   required: true,
}
})

module.exports = mongoose.model('Submissions', questionSchema)