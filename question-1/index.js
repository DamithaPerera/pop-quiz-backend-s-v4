const express = require('express');
const bodyParser = require('body-parser');

const resident = require('../question-1/module/residents/residents.router');

const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Start the server
const port = 3000;

app.use('/v1/residents', resident);

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
