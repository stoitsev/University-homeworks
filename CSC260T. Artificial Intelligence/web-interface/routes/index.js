
/*
 * GET home page.
 */

function get_random_elements(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len;
  }
  return result;
}

function get_random_int (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.index = function(req, res){
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

  var num_places = get_random_int(5, 10);
  var places = get_random_elements(all_places, num_places);
  res.render('index', {places: places});
};
