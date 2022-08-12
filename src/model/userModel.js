const mongoose= require('mongoose');
//const {Scheme} = mongoose;

const userSchema= new mongoose.SchemaType({
    firstName: String,
    lastName : String,
    mobile : {
        type: String,
        unique: true,
        required: true
    },
    emailId : String,
    gender: { 
        type: String,
    enum: ["male", "female", "LGBTQ", "other"]
    },
    age: Number,
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema)