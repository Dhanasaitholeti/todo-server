const router = require('express').Router();
const {
    addTodo,
    getTodo
} = require('../controllers/todoController')



router.get('/get-todo',getTodo)


router.post('/add-todo',addTodo)


module.exports = router;