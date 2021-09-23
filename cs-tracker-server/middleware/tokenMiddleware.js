const jwt = require("jsonwebtoken");
const User=require("../models/UserProfile.js");
const dotenv=require("dotenv");

dotenv.config();
const auth = async (request, response, next) => {
  try {
    console.log(request.header("Authorization"));
    const token = request.header("Authorization").replace("Bearer ", "");
    const decode = jwt.verify(token, process.env.SECRET);
    const user = await User.findOne({
      _id: decode._id,
      token:token
    });
    if(!user)
    {
        throw new Error();
    }
    request.user=user;
    request.token=token;
    next();
  } catch (error) {
    response.status(401).send(error);
  }
};

module.exports = auth;
