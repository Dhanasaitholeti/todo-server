const addTodo = async (req,res) => {
    const {user,priority,todo,category,status,duedate} = req.body;
    try {
        res.json({message:"all posts here"})
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}



const getTodo = async (req, res) => {
    try {
        res.json({message:"all posts here"})        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    addTodo,
    getTodo
}