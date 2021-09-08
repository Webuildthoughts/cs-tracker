const express=require('express')
const SubmissionModel=require('../models/Submission')
const router = express.Router()



/**
 * POST REQUEST TO CREATE SUBMISSION
 * REQUIRE REQUEST BODY IN JSON
 * END POINT:"localhost:5000/api/submission/create"
 */
router.post("/create",(req,res)=>{

    const body=req.body


    SubmissionModel.create(body,(err,result)=>{

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
                message:"submitted succesfully",
                data:result
            })
        }
    })
})



/**
 * GET REQUEST TO GET LIST OF QUESTIONS DONE BY USER USED TO CALCULATE PROGRESS
 * END POINT:"localhost:5000/api/submission/:id"
 */
router.get("/:uid",(req,res)=>{

    const uid=req.params.uid

    SubmissionModel.find({submittedBy:uid},(err,result)=>{

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


/**
 * GET REQUEST TO GET SPECIFIC QUESTION DONE BY USER USED TO SHOW IS QUESTION COMPLETED OR NOT
 * END POINT:"localhost:5000/api/submission/:uid/:questionId"
 */
 router.get("/:id/:questionId",(req,res)=>{

    const uid=req.params.id
    const questionId=req.params.questionId

    SubmissionModel.find({submittedBy:uid,question:questionId},(err,result)=>{

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