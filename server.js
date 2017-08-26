var express = require('express');
var mongodb = require('mongodb');
var app     = express();

//set the port of our application
//
var port = process.env.PORT || 8080;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) { 
	res.render('index');
});

var seedData = [

	{
	  	decade: '1970s',
	    artist: 'Debby Boone',
	    song: 'You Light Up My Life',
	    weeksAtOne: 10
	  },
	  {
	    decade: '1980s',
	    artist: 'Olivia Newton-John',
	    song: 'Physical',
	    weeksAtOne: 10
	  },
	  {
	    decade: '1990s',
	    artist: 'Mariah Carey',
	    song: 'One Sweet Day',
	    weeksAtOne: 16
	  }

];

var uri = 'mongodb://uditgupta:uditgupta@ds137267.mlab.com:37267/travelblogdatabase';

mongodb.MongoClient.connect(uri, function (err, db) {
	if(err) throw err;
	else {
		console.log('mongo connected');
	}
	var songs = db.collection('songs');
	songs.insert(seedData, function(err, result) {
		if(err) throw err;
		else {
			console.log('songs inserted');
		}
	})
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});