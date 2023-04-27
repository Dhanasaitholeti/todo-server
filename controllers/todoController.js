const todoModel = require('../models/todoModel')


const addTodo = async (req,res) => {
    const user_id = req.user;
    const {priority,todo,category,status,duedate} = req.body;
    try {
        const tododata = await todoModel.create({
            Belong_user:user_id,
            priority,
            Todo:todo,
            category,
            status,
            dueDate:duedate
        })
        res.status(201).json({tododata})
    } 
    catch (error) {
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

module.exports = {
    addTodo,
    getTodo
}