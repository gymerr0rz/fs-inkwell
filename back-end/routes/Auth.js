const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const authController = require('../controllers/authController');
const handleJWTToken = require('../controllers/jwtController');

router.post('/register', registerController.create_user);
router.post('/login', authController.handle_user);
router.post('/verifyJWT', handleJWTToken);

module.exports = router;
