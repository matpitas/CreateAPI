const express = require('express');


const router = express.Router();

const tasksController = require('./controllers/tasksController')
const tasksMiddlewares = require('./middlewares/tasksMiddlewares')

router.get('/tasks', tasksController.getAll)
router.post('/tasks', tasksMiddlewares.validateFieldTitle, tasksController.createTasks)
router.delete('/tasks/:id', tasksController.deleteTask)
router.put('/tasks/:id', tasksMiddlewares.validateFieldTitle, tasksMiddlewares.validateFieldStatus, tasksController.updatedTask)



module.exports = router;