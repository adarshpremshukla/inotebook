const express = require('express');
const connectToMongo = require('./db');
var cors = require('cors')
// Connect to MongoDB
connectToMongo();

const app = express();
const port = 5000;

app.use(cors())


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
  console.log(`iNotebook backend running at http://localhost:${port}`);
});
