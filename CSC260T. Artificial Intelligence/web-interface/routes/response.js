var mongo = require('mongodb');
var async = require('async');
var exec = require('child_process').exec;
var _ = require('underscore');

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mydb';

exports.save = function(req, res){
  var votes = req.body;
  var all_places = [
    "Memento",
    "The Barfly",
    "Orisha",
    "Art Club Museum",
    "J.J. Murphy\u2019s",
    "Sugar Club",
    "\u0411\u0440\u0438\u043B\u044F\u043D\u0442\u0438\u043D (Briliantin)",
    "Rock'n'Rolla",
    "McCarthy's",
    "\u041B\u0430\u0433\u0443\u043D\u0430 (Laguna)",
    "Habitat",
    "Road 66",
    "\u0427\u0435\u0442\u0438\u0440\u0438 \u0441\u0442\u0430\u0438",
    "Night Flight",
    "Sin City",
    "Cocktail Bar Katerina",
    "Blaze",
    "Ale House",
    "Bar Flight",
    "STREETBAR & CO.",
    "Jim Beam Club",
    "Grape Central",
    "Bar Up",
    "Beach Bar",
    "\u0416\u0443\u043B \u0412\u0435\u0440\u043D (Jules Verne)",
    "Raffy Terassa Bar",
    ":PM",
    "Club Tiffany"
  ];
  var userVotedFor = [];
  var userVotes = [];
  var recommended = [];

  async.series([
    function saveInDB(cb) {
      mongo.Db.connect(mongoUri, function (err, db) {
        db.collection('poll', function(er, collection) {
          collection.insert(votes, {safe: true}, function() {
            cb();
          });
        });
      });
    },
    function parseInput(cb) {
      for (var i in all_places) {
        var place = all_places[i];
        var vote = votes[place];
        if (!isNaN(vote) && vote > 0) {
          userVotedFor.push(1);
          userVotes.push(vote);
        } else {
          userVotedFor.push(0);
          userVotes.push(0);
        }
      }
      cb();
    },
    function getRecommendations(cb) {
      var userVotedForStr = '[' + userVotedFor.toString() + ']';
      var userVotesStr = '[' + userVotes.toString() + ']';
      var cmd = 'echo "' + userVotesStr + '\n' + userVotedForStr + '" | octave routes/octave/calculate_preferances.m';
      exec(cmd, function (error, stdout, stderr) {
        var output_raw = stdout.split('!#!')[1];
        var output = output_raw.replace(/\s+/g, ' ').trim();
        var outputArr = output.split(' ');
        var placesRank = _.zip(outputArr, all_places);
        var placesRankSorted = _.sortBy(placesRank, function(element) { return - Number(element[0]); });
        recommended = _.map(_.first(placesRankSorted, 10), function(arr) {
          return arr[1];
        });
        console.log(placesRankSorted);
        console.log(recommended);
        cb();
      });
    }
  ], function() {
    res.render('poll_save', {recommended: recommended});
  });
};
