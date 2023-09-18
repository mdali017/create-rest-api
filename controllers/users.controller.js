
let users = require('../models/users.model');
const { v4: uuidv4 } = require('uuid');


// get all users
const getAllUsers = (req, res) => {
    res.status(200).json({users})
}


// create an users
const createUser = async(req, res) => {
    const newUser = {
        id : uuidv4(),
        username: req.body.username,
        email: req.body.email
    }
     users.push(newUser)
    res.status(201).json({users})
}
// update an users
const updateUser = async(req, res) => {
    const userid = req.params.id;
    const {username, email} = req.body;
    users.filter((user) => user.id === userid).map((selectedUser) => {
        selectedUser.username = username;
        selectedUser.email = email;
    })
    res.status(200).json({users})
}
// delete an users
const deleteUser = async(req, res) => {
   const userid = req.params.id;
   users = users.filter((user) => user.id !== userid)
   res.status(200).json({users})
}



module.exports = {getAllUsers, createUser, updateUser, deleteUser}