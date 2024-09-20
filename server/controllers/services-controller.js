const service = require("../models/service-model");

const services = async (req, res) => {
    try {
        const response = await service.find();
        
        if(!response ||  response.length === 0) {
           return res.status(404).json({msg:"No service found"});
        }
       return res.status(200).json(response)

    } catch (error) {
        console.log("services :",error);
        return res.status(500).json({ msg: "Server error", error: error.message });
    }
}

module.exports = services