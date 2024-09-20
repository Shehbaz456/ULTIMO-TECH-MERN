const adminMiddleware = (req, res, next) => {
    try {
        console.log(req.user);
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            return res.status(403).json({message:"Access denied, User is not an admin"})
        }
        next();
    } catch (error) {
       next(error)
    }
}

module.exports = adminMiddleware;