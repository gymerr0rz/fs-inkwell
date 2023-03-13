const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const authController = require('../controllers/authController');

router.post('/register', registerController.create_user);
router.post('/login', authController.handle_user);

module.exports = router;
