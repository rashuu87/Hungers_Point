const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

app.use(cors());

// Assuming your JSON file is named 'food.json' and located in the same directory
const foodItems = require('./food.json');

app.get('/food', (req, res) => {
  res.json(foodItems);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
