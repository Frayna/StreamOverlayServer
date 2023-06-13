const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

console.log('Listening on 8888');
app.listen(8888, 'localhost');