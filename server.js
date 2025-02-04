'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1> HEY! </h1><h2>App Revision: 1.0.0</h2>\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
