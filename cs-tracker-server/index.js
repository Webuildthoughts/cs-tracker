const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const userProfileRouter=require('./routes/userProfileRouter')
const submissionRouter=require('./routes/submissionRouter')
const subjectRouter=require('./routes/subjectRouter')
const subjectTopicRouter=require('./routes/subjectTopicRouter')
const questionRouter=require('./routes/questionRouter')

const app = express()
const PORT = 5000

app.use(cors())



mongoose.connect('mongodb://localhost/dsaTracker',{
    useNewurlParser:true,
    useUnifiedTopology:true
})

app.use(express.json())
app.use("/api/subject",subjectRouter)
app.use("/api/subject/topic",subjectTopicRouter)
app.use('/api/question',questionRouter)
app.use('/api/submission',submissionRouter)
app.use('/api/user',userProfileRouter)
app.listen(PORT, () => {
  console.log('Server running on Port: ', PORT)
})