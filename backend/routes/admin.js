const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verifyAdmin = require('../middleware/verifyAdmin');

// Admin credentials (In real apps, store hashed in DB)
const ADMIN_EMAIL = 'admin@site.com';
const ADMIN_PASSWORD = 'admin123';

router.post('/login', (req, res) => {
  const email = req.body.email?.trim();
  const password = req.body.password?.trim();

  console.log('Received Email:', email);
  console.log('Received Password:', password);

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: 'admin' }, 'admin_secret_key', { expiresIn: '1h' });
    return res.json({ success: true, token });
  } else {
    return res.json({ success: false, message: 'Invalid email or password' });
  }
});

router.get('/dashboard', verifyAdmin, (req, res) => {
  res.json({ success: true, message: 'Welcome to the protected admin dashboard!' });
});

module.exports = router;