const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '.')));

app.listen(80, function () {
 console.log('App is listening on port 80!');
});
