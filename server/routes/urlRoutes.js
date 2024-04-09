const express = require('express');
const router = express.Router();
const { createShortenedURL, redirectToOriginalURL } = require('../controllers/urlController');

// endpoint to create a shortened URL
router.post('/shorten', createShortenedURL);

// endpoint to redirect to the original URL
router.get('/:shortCode', redirectToOriginalURL);

module.exports = router;