const URL = require('../models/urlModel');
const { customAlphabet } = require('nanoid');
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// Generate a 6-character long code
const nanoid = customAlphabet(alphabet, 6);

// create a shortened url
const createShortenedURL = async (req, res) => {

};

// redirect to the original URL
const redirectToOriginalURL = async (req, res) => {

};