const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

router.post('/createNote', notesController.create_notes);
router.get('/getNotes', notesController.get_notes);

module.exports = router;
