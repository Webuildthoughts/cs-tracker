const express=require('express')
const SubjectModel=require('../models/Subjects')
const SubjectTopicsModel=require('../models/SubjectTopics')
const router = express.Router()



/**
 * POST REQUEST TO CREATE TOPIC
 * REQUIRE REQUEST BODY IN JSON
 * END POINT:"localhost:5000/api/subject/topic/create"
 */
router.post("/create",async (req,res)=>{

    const body=req.body
    
    try{
        const result= SubjectTopicsModel.create(body)
        
        res.status(200).json({
        status:"Success",
        message:"SubjectTopic created succesfully",
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
 * GET REQUEST TO GET TOPICS LIST FOR GIVEN SUBJECT
 * END POINT:"localhost:5000/api/subject/topic/:subjectId/all"
 */
router.get("/:subjectId/all",async (req,res)=>{

    const subjectId=req.params.subjectId

    try
    {
        const result=await SubjectTopicsModel.find({subject:subjectId})
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
