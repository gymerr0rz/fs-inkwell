const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

router.post('/notes', notesController.get_notes);

module.exports = router;
