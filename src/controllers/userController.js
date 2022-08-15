const UserModel = require("../models/hwModel")
const userModel= require("../models/hwModel")

const createUser= async function (req, res){
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const bookData = async function ( req, res) {
    const newBookData= req.body;
    const bookData = await UserModel.create(newBookData);
    res.send({msg: bookData});
};

const allBooks= async function( req, res) {
    const allBooksData = await UserModel.find()
    res.send({msg: allBooksData})
};

module.exports.data= bookData
module.exports.allBooks= allBooks
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData