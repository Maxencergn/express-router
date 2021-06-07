const express = require('express');
const fakeTags = require('../data/tags');

const router = express.Router();

// Get a list of comments
router.get('/', (req, res) => {
  res.json(fakeTags);
});

module.exports = router;
