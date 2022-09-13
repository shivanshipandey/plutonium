const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
     fname : {
        type : String,
        required : true
     },
     lname : {
        type : String,
        requried : true
     },
     title : {
        type : String,
        enum : ["Mr", "Mrs", "Miss"],
        required : true
     },
     email : {
        type : String,
        required : true
     },
     password : {
        type : String,
        required : true
     }
},{ timestamps : true})

module.exports = mongoose.model("my-author", AuthorSchema)