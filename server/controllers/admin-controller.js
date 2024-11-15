const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const getAllusers = async(req,res,next)=>{
    try {
        const users = await User.find({},{password:0});
        // console.log(users);
        
        if(!users || users.length === 0){
            return res.status(200).json({message:"No user found"})
        }
        return res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}
const getAllContacts = async(req,res,next)=>{
    try {
        const contacts = await Contact.find();
        console.log(contacts);
        if(!contacts || contacts.length === 0){
            return res.status(404).json({message:"No contact found"});
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error)
    }
}

// Get Single User
const getUserById = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id,{password:0});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        return res.status(200).json(user);
    } catch (error) {
        next(error)
    }
}

// editUserById
const updateUserById = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const {username,email,phone} = req.body;
        const updatedUser = await User.findByIdAndUpdate({_id:id},{username,email,phone});
        if(!updatedUser){
            return res.status(404).json({message:"User not found"});
        }   
        return res.status(200).json({message:"User updated successfully",user: updatedUser});
    } catch (error) {
        next(error)
    }
}

const deleteUserById = async(req,res,next)=>{
    try {
        const {id} = req.params;
        await User.findByIdAndDelete(id);
        return res.status(200).json({message:"User deleted successfully"});
    } catch (error) {
        next(error)
    }
}

// Get Single Contact
const  getContactById = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const contact = await Contact.findById(id);
        if(!contact){
            return res.status(404).json({message:"Contact not found"});
        }
        return res.status(200).json(contact);
    } catch (error) {
        next(error)
    }
}

// Edit Contact User
const updateContactById = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const {username,email,message} = req.body;
        const updatedContact = await Contact.findByIdAndUpdate(id,{username,email,message});
        console.log(updatedContact);
        
        if(!updatedContact){
            return res.status(404).json({message:"Contact not found"});
        }   
        return res.status(200).json({updatedContact});
    } catch (error) {
        next(error)
    }
}

// Delete Contact
const deleteContactById = async(req,res,next)=>{
    try {
        const {id} = req.params;
        await Contact.findByIdAndDelete(id);
        return res.status(200).json({message:"Contact deleted successfully"});
    } catch (error) {
        next(error)
    }
}

module.exports = {getAllusers,getUserById,updateUserById,deleteUserById,getAllContacts,getContactById,updateContactById,deleteContactById} 