const User = require("../models/user-model")
const jwt = require("jsonwebtoken");

const authMiddleware = async(req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ message: "Unauthorized HTTP , Token Not Found " });
        }

        const jwtToken  = token.replace("Bearer ", "");
        // console.log("token form auth middleware",jwtToken);
        
        try {
            const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
            // req.user = isVerified.user;
            // console.log(isVerified);
            const userData = await User.findOne({email:isVerified.email}).select({password:0}); 
            // console.log(userData);
            req.user = userData;
            req.token = token;
            req.userId = userData._id;
            next();
        } catch (error) {
            return res.status(401).json({ message: "Unauthorized HTTP , Token Not Found " });
            
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Unauthorized Acess denied" });
    }
};

module.exports = authMiddleware;