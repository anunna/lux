const jwt = require('jsonwebtoken');

const generateAuthToken = (user) => {
  const token = jwt.sign(
    {
      _id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  return token;
};

module.exports = generateAuthToken;

