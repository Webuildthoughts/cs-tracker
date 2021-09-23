const express = require("express");
const UserProfileModel = require("../models/UserProfile");
const auth=require("../middleware/tokenMiddleware.js");
const router = express.Router();

/**
 * POST REQUEST TO CREATE USER PROFILE
 * REQUIRE REQUEST BODY IN JSON
 * END POINT:"localhost:5000/api/user/create"
 */
router.post("/create", async (req, res) => {
  const body = req.body;

  try {
    const result = await UserProfileModel.create(body);
    const token = await result.generateJWTToken();
    console.log(token);
    res.status(200).json({
      status: "Success",
      message: "User created successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

/**
 * ONLY FOR TESTING
 * GET REQUEST TO GET ALL USERS FOR GIVEN SUBJECT TOPIC
 * END POINT:"localhost:5000/api/question/:subjectTopicId/all"
 */
router.get("/all", auth,async (req, res) => {
  const subjectTopicId = req.params.subjectTopicId;

  try {
    const result = await UserProfileModel.find({
      subjectTopics: subjectTopicId,
    }).select({ __v: 0, subjectTopics: 0, profile: 0 });
    res.status(200).json({
      status: "Success",
      message: "Result fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: err,
    });
  }
});

/**
 * GET REQUEST TO GET PROFILE OF USER
 * END POINT:"localhost:5000/api/user/:id"
 */

router.get("/me", auth,async (request, res) => {

  try {
    const result = await UserProfileModel.findById(request.user._id);
    console.log(result);
    res.status(200).json({
      status: "Success",
      message: "Result fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: err,
    });
  }
});

module.exports = router;
