const express = require('express');
const connectToMongo = require('./db');
// Connect to MongoDB
connectToMongo();

const app = express();
const port = 3000;

// for middleware
app.use(express.json());

// Example route
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
