const express=require('express')
const UserProfileModel=require('../models/UserProfile')
const router = express.Router()



/**
 * POST REQUEST TO CREATE USER PROFILE
 * REQUIRE REQUEST BODY IN JSON
 * END POINT:"localhost:5000/api/user/create"
 */
router.post("/create",async (req,res)=>{





    const body=req.body


    try{
        const result=await UserProfileModel.create(body)
        
        res.status(200).json({
            status:"Success",
            message:"User created succesfully",
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
 * ONLY FOR TESTING
 * GET REQUEST TO GET ALL USERS FOR GIVEN SUBJECT TOPIC 
 * END POINT:"localhost:5000/api/question/:subjectTopicId/all"
 */
 router.get("/all",async (req,res)=>{

    const subjectTopicId=req.params.subjectTopicId

    try{
        const result= await UserProfileModel.find({ subjectTopics:subjectTopicId}).select({__v:0,subjectTopics:0,profile:0})
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
 * GET REQUEST TO GET PROFILE OF USER
 * END POINT:"localhost:5000/api/user/:id"
 */

router.get("/:id", async (req,res)=>{

    const uid=req.params.id

    try
    {
        const result=await serProfileModel.findById(uid)
        res.status(200).json({
            status:"Success",
            message:"Result fetched successfully",
            data:result
        })
    }
    catch(err)
    {
        res.status
        (400).json({
            status:"Error",
            message:err
        })

    }
})



module.exports=router