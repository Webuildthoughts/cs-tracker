const {mongoose,Schema}=require('./utils/ShemaUtils')

const userProfileSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
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
    require:true
  }
})

const UserProfileModel=mongoose.model('UserProfile', userProfileSchema)

module.exports =UserProfileModel