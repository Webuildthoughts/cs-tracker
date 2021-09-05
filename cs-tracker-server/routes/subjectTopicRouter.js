const express=require('express')
const SubjectModel=require('../models/Subjects')
const SubjectTopicsModel=require('../models/SubjectTopics')
const router = express.Router()



/**
 * POST REQUEST TO CREATE TOPIC
 * REQUIRE REQUEST BODY IN JSON
 * END POINT:"localhost:5000/api/subject/topic/create"
 */
router.post("/create",(req,res)=>{

    const body=req.body


    SubjectTopicsModel.create(body,(err,result)=>{

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
                message:"SubjectTopic created succesfully",
                data:result
            })
        }
    })
})



/**
 * GET REQUEST TO GET TOPICS LIST FOR GIVEN SUBJECT
 * END POINT:"localhost:5000/api/subject/topic/:subjectId/all"
 */
router.get("/:subjectId/all",(req,res)=>{

    const subjectId=req.params.subjectId

    SubjectTopicsModel.find({subject:subjectId},(err,result)=>{

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
    })
})

module.exports=router
