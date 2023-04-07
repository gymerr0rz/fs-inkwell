const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_TOKEN = process.env.REFRESH_TOKEN_SECRET;

const get_tasks = async (req, res) => {
  try {
    const { search } = req.query;

    if (!search) {
    }
    const headers = req.headers.authorization;

    if (!headers) return res.sendStatus(403);

    const token = headers.split(' ')[1];

    const decode = jwt.decode(token, SECRET_TOKEN);

    const user_username = decode.username;

    const user = await User.findOne({ username: user_username });

    if (!user) return res.sendStatus(204);

    if (!search) {
      res.send(user.tasks);
    }

    if (search) {
      const task = user.tasks.filter((task) => task.title.includes(search));
      if (task) {
        res.send(task);
      } else {
        res.status(400).json({
          status: 'failed',
          message: 'task not found!',
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const create_task = async (req, res) => {
  try {
    const { title, origin, color } = req.body;
    console.log(origin);
    if (!title && !category && !origin) return res.sendStatus(403);

    const headers = req.headers.authorization;
    const token = headers.split(' ')[1];

    if (!token) return res.sendStatus(403);

    const decode = jwt.decode(token, SECRET_TOKEN);

    const user_username = decode.username;

    const user = await User.findOne({ username: user_username });

    const task = user.tasks.find((task) => task.title === title);

    if (task) return res.sendStatus(409);

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const fullDate = `${day}.${month}.${year}`;

    const newTask = {
      title: title,
      origin: origin,
      date: fullDate,
      color: color,
    };

    user.tasks.push(newTask);

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

const modify_task = async (req, res) => {
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

const change_status_task = async (req, res) => {
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
    if (user.tasks[taskIndex].origin === 'completed') {
      user.tasks[taskIndex].origin = 'new_tasks';
      return user.save();
    } else {
      user.tasks[taskIndex].origin = 'completed';
      return user.save();
    }
  }
};

module.exports = {
  create_task,
  get_tasks,
  delete_task,
  change_status_task,
  modify_task,
};
