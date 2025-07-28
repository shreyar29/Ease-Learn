const jwt = require('jsonwebtoken');

const verifyAdmin = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, 'admin_secret_key'); // Use same secret as in login
    if (decoded.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Access denied. Not an admin.' });
    }
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(400).json({ success: false, message: 'Invalid token.' });
  }
};

module.exports = verifyAdmin;