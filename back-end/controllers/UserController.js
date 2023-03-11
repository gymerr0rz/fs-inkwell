const User = require('../models/User');
const bcrypt = require('bcrypt');

const create_user = async (req, res) => {
  const { email, username, password } = req.body.accountData;

  const userFind = await User.findOne({ email });

  if (userFind) {
    console.log('User already exists!');
    res.status(404).json({
      status: 'User already exists!',
    });
  } else {
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
    user
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => console.log(err));
    console.log('Saving User!');
  }
};

const delete_user = async (req, res) => {
  const { email } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser) {
    await User.deleteOne({ email });
    res.send('Deleted user ' + email);
  } else {
    res.send('User not found!');
  }
};

module.exports = {
  create_user,
  delete_user,
};
