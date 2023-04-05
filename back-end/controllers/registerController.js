const User = require('../models/User');
const bcrypt = require('bcrypt');

const create_user = async (req, res) => {
  const { email, username, password } = req.body.accountData;

  if (!email && !username && !password)
    return res.status(400).json({
      status: 'failed',
      message: 'No content!',
    });

  const userFind = await User.findOne({ email });

  if (userFind)
    return res.status(409).json({
      status: 'failed',
      message: 'Account already exists!',
    });

  try {
    // Hash the Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a User
    const user = new User({
      email,
      username,
      password: hashedPassword,
      notes: [],
      tasks: [],
    });

    // Save the user to the database
    user.save();
    res.status(200).json({
      status: 'success',
      message: 'Account created!',
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  create_user,
};
