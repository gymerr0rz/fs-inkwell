const User = require('../models/User');
require('dotenv').config();

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
    const users = await User.find(
      { username: new RegExp('^' + id) },
      {
        username: 1,
        email: 1,
        profile_image: 1,
        profile_banner: 1,
        bio: 1,
        _id: 0,
      }
    );

    if (users.length > 0) {
      res.status(200).json(users);
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

module.exports = { get_users, search_users };
