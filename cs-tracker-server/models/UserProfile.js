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
})

module.exports = mongoose.model('UserProfile', userProfileSchema)
