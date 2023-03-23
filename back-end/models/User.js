const mongoose = require('mongoose');
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

  // JWT tokens for user authentication and authorization
  jwt_token: [
    {
      // Encrypted token string
      token: String,

      // Expiration date of the token
      expiresAt: Date,
    },
  ],

  // User's personal notes for organization and productivity
  notes: [
    {
      // Unique title of the note
      title: {
        type: String,
        unique: true,
      },

      // Content of the note
      content: String,
    },
  ],

  // User's tasks for scheduling and tracking
  tasks: [
    {
      // Unique title of the task
      title: {
        type: String,
        unique: true,
      },

      // Category of the task (optional)
      category: String,

      // Date when the task is due (optional)
      date: String,

      // Origin of the task (optional)
      origin: String,

      // Origin Color (optinal)
      color: String,
    },
  ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
