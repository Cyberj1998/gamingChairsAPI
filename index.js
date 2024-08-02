const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
const chairsData = require('./chairs.json'); // Import the JSON file

app.use(express.json());

// Enable CORS for all origins
app.use(cors());

app.get('/gamingChairs', (req, res) => {
    res.status(200).send(chairsData);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


