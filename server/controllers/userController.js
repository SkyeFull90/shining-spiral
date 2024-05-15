
const passport = require('passport');
const User = require('../models/userModel');

const loginPage = (req, res) => {
  // No change needed for loginPage
};

const loginUser = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: false
});

const registerPage = (req, res) => {
  // No change needed for registerPage
};

const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username });
    await User.register(user, password);
    res.json({ success: true, message: 'Registration successful' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: 'Registration failed' });
  }
};

const logoutUser = (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.json({ success: true, message: 'Logout successful' });
  });
};

module.exports = {
  loginPage,
  loginUser,
  registerPage,
  registerUser,
  logoutUser
};
