var cards = [

{
"name" : "chien",
"image" : "./pictures/chien.jpg",
"id" : 1
},

{
"name" : "chat",
"image" : './pictures/chien.jpg',
"id" : 2

},

{
"name" : "lion",
"image" : './pictures/lion.jpg',
"id" : 3

},

{
"name" : "dino",
"image" : './pictures/chien.jpg',
"id" : 4

},

{
"name" : "cheval",
"image" : './pictures/cheval.jpg',
"id" : 5

},

{
"name" : "ours",
"image" : './pictures/ours.jpg',
"id" : 6

},

{
"name" : "mouton",
"image" : './pictures/mouton.jpg',
"id" : 7

},

{
"name" : "furet",
"image" : './pictures/furet.jpg',
"id" : 8

},


]


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

cards = shuffle(cards);
console.log(cards);
