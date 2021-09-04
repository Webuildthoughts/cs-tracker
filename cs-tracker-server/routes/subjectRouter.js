const express=require('express')
const SubjectModel=require('../models/Subjects')
const router = express.Router()



/**
 * POST REQUEST TO CREATE SUBJECT
 * REQUIRE REQUEST BODY IN JSON
 * END POINT:"localhost:5000/api/subject/create"
 */
router.post("/create",(req,res)=>{

    const body=req.body


    SubjectModel.create(body,(err,result)=>{

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
                message:"Subject created succesfully",
                data:result
            })
        }
    })
})



/**
 * GET REQUEST TO GET ALL SUBJECTS LIST
 * END POINT:"localhost:5000/api/subject/all"
 */
router.get("/all",(req,res)=>{

    SubjectModel.find({},(err,result)=>{

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

