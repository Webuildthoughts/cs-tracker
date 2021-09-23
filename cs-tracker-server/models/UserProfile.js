const {mongoose,Schema}=require('./utils/ShemaUtils')
const jwt=require("jsonwebtoken");
require("dotenv").config();

const userProfileSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique:true,
    required: true,
  },
  picture: {
    type: String,
  },
  institution: {
    type: String,
  },
  token:{
    type:String,

  }
})

userProfileSchema.methods.generateJWTToken = async function () {
  const token = jwt.sign({ _id: this._id.toString() },process.env.SECRET);
  this.token = token;
  await this.save();
  return token;
};


const UserProfileModel=mongoose.model('UserProfile', userProfileSchema)

module.exports =UserProfileModel