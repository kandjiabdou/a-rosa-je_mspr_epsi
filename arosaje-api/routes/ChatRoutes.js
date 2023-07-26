const express = require('express');
const router = express.Router();
const { connectedUsers } = require('../controllers/message');

// Endpoint pour récupérer la liste des utilisateurs connectés
router.get('/users', (req, res) => {
  const users = Array.from(connectedUsers.values());
  res.json(users);
});

module.exports = router;
