const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Access granted to protected route', userId: req.user });
});

module.exports = router;
