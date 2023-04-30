const router = require('express').Router();
const protect = require('../middlewares/Authentication')
const {
    addTodo,
    getTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todoController')



router.get('/get-todo', protect , getTodo)


router.post('/add-todo', protect , addTodo)

router.patch('/update-todo/:id', protect , updateTodo)

router.delete('/delete-todo/:id', protect , deleteTodo)

module.exports = router;