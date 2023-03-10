const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.post('/register', userController.create_user);
router.delete('/deleteUser', userController.delete_user);

module.exports = router;
