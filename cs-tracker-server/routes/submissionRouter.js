const express=require('express')
const SubmissionModel=require('../models/Submission')
const router = express.Router()



/**
 * POST REQUEST TO CREATE SUBMISSION
 * REQUIRE REQUEST BODY IN JSON
 * END POINT:"localhost:5000/api/submission/create"
 */
router.post("/create",async (req,res)=>{

    const body=req.body


    try
    {
        const result=await SubmissionModel.create(body)
        res.status(200).json({
            status:"Success",
            message:"submitted succesfully",
            data:result
        })
    }
    catch(err)
    {
        
        res.status(400).json({
            status:"Error",
            message:err._message
        })
    }
})



/**
 * GET REQUEST TO GET LIST OF QUESTIONS DONE BY USER USED TO CALCULATE PROGRESS
 * END POINT:"localhost:5000/api/submission/:id"
 */
router.get("/:uid",async (req,res)=>{

    const uid=req.params.uid
    try
    {
       const result=await  SubmissionModel.find({submittedBy:uid})

       res.status(400).json({
        status:"Error",
        message:err
      })
    }
    catch(err)
    {
        
        res.status(200).json({
            status:"Success",
            message:"Result fetched successfully",
            data:result
        })

    }
})


/**
 * GET REQUEST TO GET SPECIFIC QUESTION DONE BY USER USED TO SHOW IS QUESTION COMPLETED OR NOT
 * END POINT:"localhost:5000/api/submission/:uid/:questionId"
 */
 router.get("/:id/:questionId", async (req,res)=>{

    const uid=req.params.id
    const questionId=req.params.questionId


    try
    {
        const result=await SubmissionModel.find({submittedBy:uid,question:questionId});
        
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