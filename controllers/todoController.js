const todoModel = require('../models/todoModel')


const addTodo = async (req,res) => {
    const user_id = req.user;
    const {priority,todo,category,duedate} = req.body;
    try {
        const tododata = await todoModel.create({
            Belong_user:user_id,
            priority,
            Todo:todo,
            category,
            dueDate:duedate
        })
        res.status(201).json({tododata})
    } 
    catch (error) {
        console.log(error)
        res.status(400).json({message: error.message});
    }
}




const getTodo = async (req, res) => {
    const user_id = req.user;
    try {
        const tododata = await  todoModel.find({Belong_user:user_id})
        res.status(200).json({tododata})        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const deleteTodo = async (req,res) =>{
    const user_id = req.user;
    const id = req.params.id;
    console.log("here")
    try {
        await todoModel.findByIdAndDelete(id)
        const updateddata = await todoModel.find({Belong_user:user_id})
        res.status(200).json({updateddata})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error.message});

    }
}

const updateTodo = async (req,res) =>{
    const user_id = req.user;
    const id = req.params.id;
    const {priority,todo,category,duedate,status} = req.body;

    try {
        await todoModel.findByIdAndUpdate(id,{
            priority,
            Todo:todo,
            category,
            status,
            dueDate:duedate
        })
        const updateddata = await todoModel.find({Belong_user:user_id})
        res.status(200).json({updateddata})
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    addTodo,
    getTodo,
    updateTodo,
    deleteTodo
}