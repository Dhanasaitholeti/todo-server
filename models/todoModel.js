const mongoose = require('mongoose');
const usermodel = require('./users')
const schema = mongoose.Schema;


const todoSchema = new schema({
    Belong_user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:usermodel,
        required:true
    }, 
    priority:{
        type:String,
        enum:['high','low'],
        required:true
    },
    Todo:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:['Home','Work','Payments'],
        required:true
    },
    status:{
        type:String,
        enum:['Completed','Pending'],
        default:"Pending"
    },
    dueDate:{
        type:String,
        default:"Hello",
        required:true
    }
},
{
    collection:"todos"
}
)


const todoModel = mongoose.model('todos',todoSchema);

module.exports = todoModel;