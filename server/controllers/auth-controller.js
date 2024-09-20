const User = require("../models/user-model");
const bcrypt = require("bcrypt")
// ----------------------
// Home logic
// ______________________

const home = async (req, res) => {
  try {
    await res.send("This is api auth home page ");
  } catch (error) {
    console.log(error);
  }
};
// ----------------------
// Register logic
// ______________________
// 1 Get Registration Data:  Retrieve user data (username, email, password).
// 2 Check Email Existence: Check if the email is already registered.
// 3 Hash Password: Securely hash the password.
// 4 Create User: Create a new user with hashed password.
// 5 Save to DB: Save user data to the database.
// 6 Respond: Respond with ‘Registration successful’ or handle errors.

const register = async (req, res, next) => {
  try {
    const { username, email, password, phone } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "email is already exists" });
      // const error = {
      //   status:400,
      //   extraDetails:"email is already exists",
      // }
      // return next(error); 
    }

    let newUser = await User.create({ username, email, password, phone });
    res
      .status(201)
      .json({
        msg: "Registration Successful",
        token: await newUser.generateToken(),
        userId: newUser._id.toString(),
      });
  } catch (err) {
    console.log(err);
    // res.status(400).json({ msg: `internal server error <br/>  ${err}` });
    const error = {
      status:400,
      message:`internal server error <br/>  ${error}`,
    }
    next(error);
  }
};


// ----------------------
// Login logic
// ______________________


const login = async(req,res,next)=>{
    try {

    let {email,password} = req.body;
    const userExist = await User.findOne({ email });
    
    if(!userExist){
        return res.status(400).json({extraDetails:"Email not registered"})
        // const error = {
        //   status:400,
        //   message:"Invalid Credentials",
        // }
        // return next(error);
    }
    
    let comparedPassword = await userExist.comparePassword(password);
    // bcrypt.compare(password,userExist.password)
    
    if(comparedPassword){
        res
      .status(200)
      .json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    }else{
        return res.status(401).json({message:"Invalid email or password"})
        // const error = {
        //   status:401,
        //   message:"Invalid email or password",
        // }
        // return next(error);
    }
    
    } catch (err) {
        // res.status(500).json("internal server error");
        const error = {
          status:500,
          message:`internal server error`,
        }
        next(error);
    }
}


// ----------------------
// user info get logic
// ______________________

const user = async(req,res,next)=>{
  try {
    const userData = req.user;
    console.log("userData",userData);
    res.status(200).json({userData})
  } catch (error) {
    console.log("Error from the user route",error);
  }
}




module.exports = { home, register,login,user};
