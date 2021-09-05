const express=require('express')
const mongoose=require('mongoose')

const subjectRouter=require('./routes/subjectRouter')
const subjectTopicRouter=require('./routes/subjectTopicRouter')

const app = express()
const PORT = 5000



mongoose.connect('mongodb://localhost/dsaTracker',{
    useNewurlParser:true,
    useUnifiedTopology:true
})

app.use(express.json())
app.use("/api/subject",subjectRouter)
app.use("/api/subject/topic",subjectTopicRouter)
app.listen(PORT, () => {
  console.log('Server running on Port: ', PORT)
})