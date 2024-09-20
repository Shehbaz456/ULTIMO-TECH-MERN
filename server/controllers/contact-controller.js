const Contact = require("../models/contact-model"); 

const contactcontrollers = async (req, res) => {
    try {
        const { username, email, message } = req.body;
        const newContact = new Contact({ username, email, message });   

        await newContact.save();

        res.status(201).json({ message: "message send successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "message not delivered" });
    }
};
module.exports = contactcontrollers;