const express=require('express')
const SubjectModel=require('../models/Subjects')
const router = express.Router()



/**
 * POST REQUEST TO CREATE SUBJECT
 * REQUIRE REQUEST BODY IN JSON
 * END POINT:"localhost:5000/api/subject/create"
 */
router.post("/create",async (req,res)=>{

    const body=req.body



   try{
         const result=await SubjectModel.create(body)
         res.status(200).json({
             status:"Success",
             message:"Subject created succesfully",
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
 * GET REQUEST TO GET ALL SUBJECTS LIST
 * END POINT:"localhost:5000/api/subject/all"
 */
router.get("/all",async(req,res)=>{


    try
    {
        const result=await SubjectModel.find({})
        
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

