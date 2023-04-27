const router = require('express').Router();
const protect = require('../middlewares/Authentication')
const {
    addTodo,
    getTodo
} = require('../controllers/todoController')



router.get('/get-todo', protect , getTodo)


router.post('/add-todo', protect , addTodo)


module.exports = router;