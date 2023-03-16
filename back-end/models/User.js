const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_image: {
    type: String,
    default:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_110805.png&f=1&nofb=1&ipt=c9ab557c33cc15e347b0b50c63db4aff92088959cb54dbe111f6c013639b1ca2&ipo=images',
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now(),
    required: false,
  },
  jwt_token: [
    {
      token: {
        type: String,
      },
      expiresAt: {
        type: Date,
      },
    },
  ],
  notes: [
    {
      title: {
        type: String,
        unique: true,
      },
      content: {
        type: String,
      },
    },
  ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
