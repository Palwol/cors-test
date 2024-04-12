const express = require('express');
const path = require('path');
const PORT = 4000;

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/image', (req, res) => {
  res
    .setHeader('Cache-Control', 'public, max-age=3600')
    .setHeader('Access-Control-Allow-Origin', req.get('origin'))
    .setHeader('Vary', 'origin')
    .sendFile(path.join(__dirname, './img/palwol.jpeg'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
