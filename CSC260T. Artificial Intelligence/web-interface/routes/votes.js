var mongo = require('mongodb');

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mydb';

exports.list = function(req, res) {
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
  mongo.Db.connect(mongoUri, function (err, db) {
    db.collection('poll', function(er, collection) {
      collection.find().toArray(function(err, results) {
        console.log(results);
        res.render('votes_list', {
          all_places: all_places,
          votes: results
        });

        db.close();
      });
    });
  });

};
