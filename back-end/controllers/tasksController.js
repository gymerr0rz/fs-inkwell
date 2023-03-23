const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_TOKEN = process.env.REFRESH_TOKEN_SECRET;

const get_tasks = async (req, res) => {
  try {
    const headers = req.headers.authorization;

    if (!headers) return res.sendStatus(403);

    const token = headers.split(' ')[1];

    const decode = jwt.decode(token, SECRET_TOKEN);

    const user_username = decode.username;

    const user = await User.findOne({ username: user_username });

    if (!user) return res.sendStatus(204);

    res.send(user.tasks);
  } catch (err) {
    console.log(err);
  }
};

const create_task = async (req, res) => {
  try {
    const { title, category, origin, color } = req.body;
    console.log({ title, category, origin, color });
    if (!title && !category && !origin) return res.sendStatus(403);

    const headers = req.headers.authorization;
    const token = headers.split(' ')[1];

    if (!token) return res.sendStatus(403);

    const decode = jwt.decode(token, SECRET_TOKEN);

    const user_username = decode.username;

    const user = await User.findOne({ username: user_username });

    const note = user.tasks.find((task) => task.title === title);

    if (note) return res.sendStatus(409);

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const fullDate = `${day}.${month}.${year}`;

    user.tasks.push({
      title: title,
      category: category,
      date: fullDate,
      origin: origin,
      color: color,
    });

    await user.save();

    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};

const delete_task = async (req, res) => {
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

module.exports = { create_task, get_tasks, delete_task };