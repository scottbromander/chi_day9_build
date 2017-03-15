var express = require('express');
var app = express();
var port = 5000; // 5000 used for localhost
var index = require("./modules/index.js");

app.use(express.static('server/public', {
  index: 'views/index.html'
}));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


app.listen(port, function(){
  console.log("Listening on port ", port);
});
