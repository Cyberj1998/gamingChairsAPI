const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 8080;
const chairsData = require('./chairs.json'); // Import the JSON file

app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Serve static files from the 'assets' directory
app.use('/assets', express.static('assets'));

app.get('/gamingChairs', (req, res) => {
    // Update the image paths to be absolute URLs
    const updatedChairsData = chairsData.map((chair, index) => ({
        ...chair,
        image: http://localhost:${PORT}/assets/Gaming-Chair-${index + 1}.jpg  // Assuming images are named as 'Gaming-Chair-1.jpg', 'Gaming-Chair-2.jpg', etc.
    }));
    res.status(200).json(updatedChairsData);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



