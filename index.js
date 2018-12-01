'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static((`${__dirname}/build`)));
app.get('/about', (req, res) => {
  res.sendFile(`${__dirname}/build/src/components/about/about.js`);
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server up on port', process.env.PORT || 8080);
});
