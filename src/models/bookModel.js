const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName :  {
        type : String,
         require : true
        },
    authorName : String,
    category : {
        type : String,
    },
    year : {
        type : Date,
         require : true
        }
},{ timestamps:true });

module.exports = mongoose.model('book',bookSchema);