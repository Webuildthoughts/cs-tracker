const express=require('express')
const { $where } = require('../models/Questions')
const QuestionModel=require('../models/Questions')
const router = express.Router()



/**
 * POST REQUEST TO CREATE QUESTION
 * REQUIRE REQUEST BODY IN JSON
 * END POINT:"localhost:5000/api/question/create"
 */
router.post("/create",(req,res)=>{

    const body=req.body


    QuestionModel.create(body,(err,result)=>{

        if(err)
        {
            res.status(400).json({
                status:"Error",
                message:err._message
            })
        }
        else
        {
            res.status(200).json({
                status:"Success",
                message:"Question created succesfully",
                data:result
            })
        }
    })
})



/**
 * GET REQUEST TO GET QUESTIONS LIST FOR GIVEN SUBJECT TOPIC
 * END POINT:"localhost:5000/api/question/:subjectTopicId/all"
 */
router.get("/:subjectTopicId/all",(req,res)=>{

    const subjectTopicId=req.params.subjectTopicId

    QuestionModel.find({ subjectTopics:subjectTopicId},(err,result)=>{

        if(err)
        {
            res.status(400).json({
                status:"Error",
                message:err
            })
        }
        else
        {
            res.status(200).json({
                status:"Success",
                message:"Result fetched successfully",
                data:result
            })
        }
    }).select({__v:0,subjectTopics:0,profile:0})
})


/**
 * GET REQUEST TO GET QUESTIONS LIST FOR GIVEN SUBJECT TOPIC & DIFFICULTY
 * END POINT:"localhost:5000/api/question/:subjectTopicId/difficulty/all"
 */
 router.get("/:subjectTopicId/:diffLevel/all",(req,res)=>{

    const subjectTopicId=req.params.subjectTopicId
    const diffLevel=req.params.diffLevel
    QuestionModel.find({ subjectTopics:subjectTopicId,difficulty:diffLevel},(err,result)=>{

        if(err)
        {
            res.status(400).json({
                status:"Error",
                message:err
            })
        }
        else
        {
            res.status(200).json({
                status:"Success",
                message:"Result fetched successfully",
                data:result
            })
        }
    }).select({__v:0,subjectTopics:0,profile:0})
})


/**
 * GET REQUEST TO GET QUESTIONS LIST DONE BY PARTICULAR USER 
 * END POINT:"localhost:5000/api/question/user/uid/all"
 * YET TO IMPLEMENTED
 */
 router.get("/user/:uid/all",(req,res)=>{

    const uid=req.params.uid
    QuestionModel.find({ profile:{$in:uid}},(err,result)=>{

        if(err)
        {
            res.status(400).json({
                status:"Error",
                message:err
            })
        }
        else
        {
            res.status(200).json({
                status:"Success",
                message:"Result fetched successfully",
                data:result
            })
        }
    }).select({__v:0,subjectTopics:0,profile:0})
})


module.exports=router