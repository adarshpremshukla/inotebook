const express = require('express');
const connectToMongo = require('./db');
// Connect to MongoDB
connectToMongo();

const app = express();
const port = 5000;

app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
