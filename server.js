const express = require('express');
const app = express();
const fs = require('fs');
app.listen(7000);
app.get('/data', function(req, res) {
  fs.createReadStream('./src/data.json').pipe(res);
})
