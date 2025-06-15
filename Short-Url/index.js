const express = require('express');
const urlRoute = require('./routes/url');
const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`Short URL service running at http://localhost:${port}`);
});     