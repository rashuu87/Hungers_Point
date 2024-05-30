
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3002;

app.use(cors());

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

const foodItems = require('./food.json');

app.get('/food', (req, res) => {
  res.json(foodItems);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
