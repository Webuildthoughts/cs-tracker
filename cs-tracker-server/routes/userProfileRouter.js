const express=require('express')
const UserProfileModel=require('../models/UserProfile')
const router = express.Router()



/**
 * POST REQUEST TO CREATE USER PROFILE
 * REQUIRE REQUEST BODY IN JSON
 * END POINT:"localhost:5000/api/user/create"
 */
router.post("/create",(req,res)=>{

    const body=req.body


    UserProfileModel.create(body,(err,result)=>{

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
                message:"User created succesfully",
                data:result
            })
        }
    })
})


/**
 * ONLY FOR TESTING
 * GET REQUEST TO GET ALL USERS FOR GIVEN SUBJECT TOPIC 
 * END POINT:"localhost:5000/api/question/:subjectTopicId/all"
 */
 router.get("/all",(req,res)=>{

    const subjectTopicId=req.params.subjectTopicId

   UserProfileModel.find({ subjectTopics:subjectTopicId},(err,result)=>{

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
 * GET REQUEST TO GET PROFILE OF USER
 * END POINT:"localhost:5000/api/user/:id"
 */
router.get("/:id",(req,res)=>{

    const uid=req.params.id

    UserProfileModel.findById(uid,(err,result)=>{

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