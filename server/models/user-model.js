const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    minlength: [3, 'Username must be at least 3 characters long'],
    maxlength: [50, 'Username cannot be more than 30 characters long'],
    trim: true
  },
  phone: {
    type: String,  
    required: [true, 'Phone number is required'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,   
    trim: true, 
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true, 
  },
  isAdmin:{
    type:Boolean,
    default:false
  }
});



// secure password with bcrypt
userSchema.pre("save",async function(next){
  // console.log("pre method",this.password);
  let user = this 
  if(!user.isModified('password')){
    next()
  }
  try {
    const saltRounds = 10;
    const hash_password = await bcrypt.hash(user.password,saltRounds)
    user.password = hash_password
  } catch (error) {
    next(error)
  }
})

// Compare Password
userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password,this.password)
}


// JWT ( json web token )
// Tokens, such as JWTs (JSON Web Tokens), are typically not stored in the database along with other user
// details. Instead, they are issued by the server during the authentication process and then stored on the
// client-side (e.g., in cookies or local storage) for later use.

// Jwt
userSchema.methods.generateToken = function(){
  try {
    return jwt.sign({
      userId:this._id.toString(),
      email:this.email,
      isAdmin:this.isAdmin
    }, process.env.JWT_SECRET_KEY, {expiresIn:"30d"} )
  } catch (error) {
    console.log(error);
  }
}



const User = mongoose.model('User', userSchema);

module.exports = User;
