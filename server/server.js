const express = require('express');
const connectDB = require('./db');
const urlRoutes = require('./routes/urlRoutes');
require('dotenv').config();

const app = express();

// connect to MongoDB
connectDB();

// middleware to parse JSON requests
app.use(express.json());

// define routes
//app.use('/api', urlRoutes);

// default route
app.get('/', (req, res) => {
    res.send('Welcome to URL Shortener Service');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
