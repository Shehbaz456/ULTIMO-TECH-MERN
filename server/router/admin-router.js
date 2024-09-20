const express = require("express");
const router = express.Router();
const {getAllusers,getAllContacts,deleteUserById, updateUserById, getUserById, deleteContactById, updateContactById, getContactById} =  require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const  adminMiddleware = require("../middlewares/admin-middleware");


router.route("/users").get( authMiddleware,adminMiddleware,getAllusers)
router.route("/users/:id").get( authMiddleware,adminMiddleware,getUserById)
router.route("/users/update/:id").patch( authMiddleware,adminMiddleware,updateUserById)
router.route("/users/delete/:id").delete( authMiddleware,adminMiddleware,deleteUserById)

router.route("/contacts").get(authMiddleware,adminMiddleware,getAllContacts)
router.route("/contacts/:id").get(authMiddleware,adminMiddleware,getContactById)
router.route("/contacts/update/:id").patch(authMiddleware,adminMiddleware,updateContactById)
router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware,deleteContactById)

module.exports = router;