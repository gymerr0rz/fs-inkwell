const mongoose = require('mongoose');
const { noteSchema } = require('./Notes');
const { taskSchema } = require('./Tasks');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  // User's unique username for login
  username: {
    type: String,
    required: true,
    unique: true,
  },
  // User's unique email for contact and notifications
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // User's encrypted password for security
  password: {
    type: String,
    required: true,
  },
  // User's profile image URL for display
  profile_image: {
    type: String,
    default: 'https://cdn.onlinewebfonts.com/svg/img_110805.png',
  },
  // Date when the user account was created
  created_at: {
    type: Date,
    default: Date.now,
  },
  notes: [noteSchema],
  tasks: [taskSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
