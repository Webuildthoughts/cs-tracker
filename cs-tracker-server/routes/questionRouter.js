const express=require('express')
const { $where } = require('../models/Questions')
const QuestionModel=require('../models/Questions')
const router = express.Router()



/**
 * POST REQUEST TO CREATE QUESTION
 * REQUIRE REQUEST BODY IN JSON
 * END POINT:"localhost:5000/api/question/create"
 */



router.post("/create",async (req,res)=>{

    const body=req.body


 

   try{
        const result= await QuestionModel.create(body)
        res.status(200).json({
        status:"Success",
        message:"Question created succesfully",
        data:result})
   }
   catch(err)
   {
       res.status(400).json({
        status:"Error",
        message:err._message})

   }

})



/**
 * GET REQUEST TO GET QUESTIONS LIST FOR GIVEN SUBJECT TOPIC
 * END POINT:"localhost:5000/api/question/:subjectTopicId/all"
 */
router.get("/:subjectTopicId/all",async (req,res)=>{

    const subjectTopicId=req.params.subjectTopicId

    try
    {
        const result=await     QuestionModel.find({ subjectTopics:subjectTopicId}).select({__v:0,subjectTopics:0,profile:0})
         res.status(200).json({
                status:"Success",
                message:"Result fetched successfully",
                data:result
            })

    }
    catch(err)
    {
        res.status(400).json({
            status:"Error",
            message:err
        })

    }
})


/**
 * GET REQUEST TO GET QUESTIONS LIST FOR GIVEN SUBJECT TOPIC & DIFFICULTY
 * END POINT:"localhost:5000/api/question/:subjectTopicId/difficulty/all"
 */
 router.get("/:subjectTopicId/:diffLevel/all",async (req,res)=>{

    const subjectTopicId=req.params.subjectTopicId
    const diffLevel=req.params.diffLevel

    try
    {
        const result=await  QuestionModel.find({ subjectTopics:subjectTopicId,difficulty:diffLevel}).select({__v:0,subjectTopics:0,profile:0})

        res.status(200).json({
            status:"Success",
            message:"Result fetched successfully",
            data:result
        })
    }
    catch(err)
    {
        
        res.status(400).json({
            status:"Error",
            message:err
        })

    }
 })


/**
 * GET REQUEST TO GET QUESTIONS LIST DONE BY PARTICULAR USER 
 * END POINT:"localhost:5000/api/question/user/uid/all"
 * YET TO TESTED 
 */

 router.get("/user/:uid/all",async (req,res)=>{

    const uid=req.params.uid

    try
    {
        const result=await QuestionModel.find({ profile:{$in:uid}}).select({__v:0,subjectTopics:0,profile:0})
        
        res.status(200).json({
            status:"Success",
            message:"Result fetched successfully",
            data:result
        })

    }
    catch(err)
    {
        res.status(400).json({
            status:"Error",
            message:err
        })

    }
})


module.exports=router