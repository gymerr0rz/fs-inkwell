const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handle_user = async (req, res) => {
  const { email, password } = req.body.accountData;

  const user = await User.findOne({ email });

  if (!user) return res.sendStatus(401); // unauthorized
  const match = await bcrypt.compare(password, user.password);
  if (match) {
    const accessToken = jwt.sign(
      {
        username: user.username,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '30s' }
    );
    const refreshToken = jwt.sign(
      {
        username: user.username,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );
    user.jwt_token.push({
      token: refreshToken,
      expiresAt: new Date(Date.now() + 60 * 60 * 1000),
    });
    await user.save();
    res.json({
      success: `User ${user.username} is logged in`,
      jwt_token: accessToken,
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handle_user };
