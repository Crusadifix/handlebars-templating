var path = require('path');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/people', function (req, res, next) {
  res.status(200).sendFile(__dirname + '/public/people.html');
});

var availablePeople = [
  'beyonce',
  'einstein',
  'luke',
  'marie',
  'ta-nehisi'
];
app.get('/people/:person', function (req, res, next) {
  var person = req.params.person.toLowerCase();
  if (availablePeople.indexOf(person) >= 0) {
    res.status(200).sendFile(
      __dirname + '/public/people/' + person + '.html'
    );
  } else {
    next();
  }
});

app.listen(8000, function () {
  console.log("== Server listening on port 8000");
})
