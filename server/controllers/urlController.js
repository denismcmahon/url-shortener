const URL = require('../models/urlModel');
const shortid = require('shortid');

// create a shortened url
const createShortenedURL = async (req, res) => {
    const { longUrl } = req.body;
    const uniqueShortURL = shortid.generate();

    // create a new URL document
    const url = new URL({
        longUrl,
        shortCode: uniqueShortURL
    });

    // save the url document to the database
    const savedURL = await url.save();
    res.json({ shortUrl: savedURL.shortCode });
};

// redirect to the original URL
const redirectToOriginalURL = async (req, res) => {
    const shortCode = req.params.shortCode;
    try {
        // find url document with the given short code
        const url = await URL.findOne({ shortCode });
        if(!url) {
            return res.status(404).json({ message: 'URL not found' });
        }
        // respond with the original url
        res.status(200).json({ longUrl: url.longUrl });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createShortenedURL, redirectToOriginalURL };