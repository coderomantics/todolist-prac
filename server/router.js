const express = require('express');
const router = express.Router();
const controller = require('./controllers/toDoController');


router.get('/tasks', controller.retrieveToDos )
router.post('/tasks', controller.addToDo)
router.delete('/tasks', controller.deleteToDo)
// router.put('/tasks/:id',)





module.exports = router;
