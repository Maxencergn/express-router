const express = require('express');
const fakeTags = require('../data/tags');

const router = express.Router();

// Get a single post
router.get('/:tagId', (req, res) => {
  const tagId = Number(req.params.tagId);
  const foundTag = fakeTags.find((tag) => tag.id === tagId);
  if (!foundTag) {
    return res.status(404).json({
      error: 'Tag not found',
    });
  }
  return res.json(foundTag);
});

router.get('/:tagId/posts', (req, res) => {
  const tagId = Number(req.params.tagId);
  const foundTag = allPosts.filter((post) => post.tag_ids.includes(tagId));
  if (!foundTag) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }
  return res.json(foundTag);
});

module.exports = router;
