var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var peopleData = require('./peopleData');

var app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/test', function (req, res, next) {
  res.render('photoPage', {
    name: "Kitty",
    showDiv: false,
    photos: [
      {
        photoURL: "http://placekitten.com/320/320?image=6",
        caption: "A kitty"
      },
      {
        photoURL: "http://placekitten.com/320/320?image=4",
        caption: "A kitty"
      },
      {
        photoURL: "http://placekitten.com/320/320?image=2",
        caption: "A kitty"
      },
      {
        photoURL: "http://placekitten.com/320/320?image=3",
        caption: "A kitty"
      }
    ]
  });
});

app.get('/people', function (req, res, next) {
  res.status(200).sendFile(__dirname + '/public/people.html');
});

// var availablePeople = [
//   'beyonce',
//   'einstein',
//   'luke',
//   'marie',
//   'ta-nehisi'
// ];
app.get('/people/:person', function (req, res, next) {
  var person = req.params.person.toLowerCase();
  if (peopleData[person]) {
    res.status(200).render('photoPage', peopleData[person]);
  } else {
    next();
  }
});

app.listen(3001, function () {
  console.log("== Server listening on port 3001");
})
