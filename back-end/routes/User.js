const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');
const tasksController = require('../controllers/tasksController');
const userController = require('../controllers/userController');

// Notes routes
router.post('/createNote', notesController.create_notes);
router.get('/getNotes', notesController.get_notes);
router.delete('/deleteNote', notesController.delete_note);

// Tasks routes
router.post('/createTask', tasksController.create_task);
router.get('/getTasks', tasksController.get_tasks);
router.delete('/deleteTask', tasksController.delete_task);
router.post('/changeStatusTask', tasksController.change_status_task);

// User routes
router.post('/changeSettings', userController.change_settings);
router.get('/getUser', userController.get_user);
router.delete('/deleteUser', userController.delete_user);

module.exports = router;
