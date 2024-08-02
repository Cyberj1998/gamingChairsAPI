const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080; // Update the PORT to use environment variable or default to 8080
const chairsData = require('./chairs.json'); // Import the JSON file

app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Serve static files from the 'assets' directory
app.use('/assets', express.static('assets'));

app.get('/gamingChairs', (req, res) => {
    // Update the image paths to be absolute URLs with current hostname
    const hostname = req.hostname;
    const protocol = req.protocol;
    const updatedChairsData = chairsData.map((chair, index) => ({
        ...chair,
        image: `${protocol}://${hostname}/assets/Gaming-Chair-${index + 1}.jpg` // Generate dynamic image URLs
    }));
    res.status(200).json(updatedChairsData);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



