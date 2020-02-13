var express = require('express');
var serveStatic = require('serve-static');
var application = express();

var fs = require('fs');

var array = fs.readFileSync('words.txt', 'utf8').split('\n');

application.get('/words', function (req, res) {
    res.send(JSON.stringify(array));
})

var port = process.env.PORT || 5001;

application.use(serveStatic(__dirname + "/dist"));


application.listen(port);

console.log('server started ' + port);