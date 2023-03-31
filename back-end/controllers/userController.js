const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_TOKEN = process.env.REFRESH_TOKEN_SECRET;

const get_user = async (req, res) => {
  try {
    const headers = req.headers.authorization;

    if (!headers) return res.sendStatus(403);

    const token = headers.split(' ')[1];

    const decode = jwt.decode(token, SECRET_TOKEN);

    const user_username = decode.username;

    const user = await User.findOne({ username: user_username });

    if (!user) return res.sendStatus(204);

    console.log(user);
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

const delete_user = async (req, res) => {
  const { title } = req.body;

  if (!title) return res.sendStatus(403);

  const headers = req.headers.authorization;
  const token = headers.split(' ')[1];

  if (!token) return res.sendStatus(403);

  const decode = jwt.decode(token, SECRET_TOKEN);

  const user_username = decode.username;

  const user = await User.findOne({ username: user_username });

  const taskIndex = user.tasks.findIndex((task) => task.title === title);

  if (taskIndex !== -1) {
    user.tasks.splice(taskIndex, 1);
    await user.save();
    return res.sendStatus(200);
  }
};

const change_settings = async (req, res) => {
  const { title } = req.body;

  if (!title) return res.sendStatus(403);

  const headers = req.headers.authorization;
  const token = headers.split(' ')[1];

  if (!token) return res.sendStatus(403);

  const decode = jwt.decode(token, SECRET_TOKEN);

  const user_username = decode.username;

  const user = await User.findOne({ username: user_username });

  const taskIndex = user.tasks.findIndex((task) => task.title === title);

  if (taskIndex !== -1) {
    user.tasks.splice(taskIndex, 1);
    await user.save();
    return res.sendStatus(200);
  }
};

module.exports = {
  get_user,
  delete_user,
  change_settings,
};
