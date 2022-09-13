const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    authorId : {
        type : ObjectId,
        ref : "my-author",
        required : true
    },
    tags : {
        type : [String],
        required : true 
    },
    category : {
        type : String,
        required : true
    },
    subcategory : {
        type : [String],
        required : true
    },
    isDeleted : {
        type : Boolean,
        default : false
    },
    isPublished : {
        type : Boolean,
        default : false
    },
    deletedAt : {
        type : Date
    },
    publishedAt : {
        type : Date
    }
}, {timestamps : true})

module.exports = mongoose.model("my-blogs", blogSchema)