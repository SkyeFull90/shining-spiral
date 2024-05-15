const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router
  .route('/api/login')
  .get(userController.loginPage)
  .post(userController.loginUser);

router
  .route('/api/register')
  .get(userController.registerPage)
  .post(userController.registerUser);

router
  .route('/api/logout')
  .get(userController.logoutUser);

module.exports = router;