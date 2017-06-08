var db = require('./db.js')

module.exports.handleSignup = (email, pass) => {
  // Check if email already exists
  // Save user to db
  db.saveUser({email, pass});
  // Send welcome email
};
