const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_TOKEN = process.env.REFRESH_TOKEN_SECRET;

const get_notes = async (req, res) => {
  try {
    const headers = req.headers.authorization;
    const token = headers.split(' ')[1];

    if (!token) return res.sendStatus(403);

    const decode = jwt.decode(token, SECRET_TOKEN);

    const user_username = decode.username;

    const user = await User.findOne({ username: user_username });

    res.send(user.notes);
  } catch (err) {
    console.log(err);
  }
};

const create_notes = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title && !content) return res.sendStatus(403);

    const headers = req.headers.authorization;
    const token = headers.split(' ')[1];

    if (!token) return res.sendStatus(403);

    const decode = jwt.decode(token, SECRET_TOKEN);

    const user_username = decode.username;

    const user = await User.findOne({ username: user_username });

    user.notes.push({
      title: title,
      content: content,
    });

    await user.save();

    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { create_notes, get_notes };
