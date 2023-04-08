const mongoose = require('mongoose');
const { noteSchema } = require('./Notes');
const { taskSchema } = require('./Tasks');
const Schema = mongoose.Schema;

const socialSchema = new Schema({
  social: {
    enum: ['twitter', 'github', 'linkedin'],
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
});

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
    default: 'uploads/default.png',
  },
  banner: {
    type: String,
    default: 'https://cdn.onlinewebfonts.com/svg/img_110805.png',
  },
  // Date when the user account was created
  created_at: {
    type: Date,
    default: Date.now,
  },
  bio: {
    type: String,
    default: 'No bio',
  },
  social_media: [socialSchema],
  notes: [noteSchema],
  tasks: [taskSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
