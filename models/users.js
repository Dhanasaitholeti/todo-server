const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},
{
    collection:"users"
})

const userModel = mongoose.model('users',userSchema)


module.exports = userModel;