const express = require('express');
const userRouter = express.Router();
const {registerUser, loginUser, getUser} = require('../controllers/userController.js')
const {protect} = require('../middleware/authMiddleware.js');

userRouter.post('/', registerUser)
userRouter.post('/login',  loginUser)
userRouter.get('/me', protect,  getUser)
module.exports = userRouter;