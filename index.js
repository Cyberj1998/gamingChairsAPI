const express = require('express');
const app = express();
const PORT = 8080;
const chairsData = require('./chairs.json'); // Import the JSON file

app.use(express.json());

app.get('/gamingChairs', (req, res) => {
    res.status(200).send(chairsData);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
