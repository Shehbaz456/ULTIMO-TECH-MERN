// Express router 

const express = require("express");
const router = express.Router();
const contactcontrollers = require("../controllers/contact-controller");

router.route("/contact").post(contactcontrollers)


module.exports = router