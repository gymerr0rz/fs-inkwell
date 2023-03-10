const User = require('../models/User');

const create_user = async (req, res) => {
  const { email, username, password } = req.body;
  const user = new User({
    email,
    username,
    password,
  });

  const userFind = await User.findOne({ email });

  if (userFind) {
    res.send('User already Exists');
  } else {
    user
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => console.log(err));
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
