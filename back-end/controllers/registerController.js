const User = require('../models/User');
const bcrypt = require('bcrypt');

const create_user = async (req, res) => {
  const { email, username, password } = req.body.accountData;

  if (!email && !username && !password) return res.status(400);

  const userFind = await User.findOne({ email });

  if (userFind) return res.status(404);

  try {
    // Hash the Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a User
    const user = new User({
      email,
      username,
      password: hashedPassword,
    });
    console.log('User created!');

    // Save the user to the database
    user.save();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  create_user,
};
