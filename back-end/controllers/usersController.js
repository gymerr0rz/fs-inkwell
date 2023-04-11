const User = require('../models/User');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET_TOKEN = process.env.REFRESH_TOKEN_SECRET;

const get_users = async (req, res) => {
  try {
    const { id } = req.params;
    const maxUsers = 5;
    const users = await User.find(
      { username: new RegExp('^' + id) },
      { username: 1, email: 1, profile_image: 1, _id: 0 }
    );

    if (users.length > 0) {
      res.status(200).json(users.slice(0, maxUsers));
    } else {
      res.status(404).json({
        status: 'failed',
        message: 'Users not found!',
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const search_users = async (req, res) => {
  try {
    const { id } = req.query;

    const headers = req.headers.authorization;

    if (!headers) return res.sendStatus(403);

    const token = headers.split(' ')[1];

    const decode = jwt.decode(token, SECRET_TOKEN);

    const user_username = decode.username;

    const user = await User.findById(user_username);

    const users = await User.findOne({ username: id });

    if (users) {
      if (user.username === users.username) {
        res.status(200).json({
          users: {
            username: users.username,
            bio: users.bio,
            profile_banner: users.profile_banner,
            profile_image: users.profile_image,
            social_media: user.social_media,
          },
          owner: true,
        });
      } else {
        res.status(200).json({ users, owner: false });
      }
    } else {
      res.status(404).json({
        status: 'failed',
        message: 'User not found!',
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { get_users, search_users };
