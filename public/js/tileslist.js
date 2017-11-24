var React = require('react');
var Tiles = require('./tiles')
var Score = require('./score');
var Badge = require('react-bootstrap').Badge
var comparaison = [];





class TilesList extends React.Component {

     constructor() {
       super();

       this.handleClick = this.handleClick.bind(this);
       this.state = {selected : true, signal: ""};

}

     handleClick(animalName){
      /*this.setState({
        selected: true
      })*/
       console.log("récupération de l'animal " + animalName);
       comparaison.push(animalName);
       console.log(comparaison);
       if(comparaison.length == 2){
         //console.log("j'ai deux animaux en moi");
       if(comparaison[0] == comparaison[1]){
        this.setState({ signal: "win"})
       //console.log("les deux animaux sont identiques")
       comparaison = [];
       } else {
         this.setState({ signal: "lost"})
                comparaison = [];
              }
            }

   }


     render() {





       var cards = [

       {
       "name" : "chien",
       "image" : "./pictures/chien.jpg",
       "id" : 1
       },

              {
              "name" : "mouton",
              "image" : './pictures/mouton.jpg',
              "id" : 7

              },

       {
       "name" : "chat",
       "image" : './pictures/chat.jpg',
       "id" : 2

       },

       {
       "name" : "lion",
       "image" : './pictures/lion.jpg',
       "id" : 11

       },

       {
       "name" : "lion",
       "image" : './pictures/lion.jpg',
       "id" : 3

       },

       {
       "name" : "dino",
       "image" : './pictures/dino.jpg',
       "id" : 4

       },


       {
       "name" : "ours",
       "image" : './pictures/ours.jpg',
       "id" : 6

       },


       {
       "name" : "chien",
       "image" : "./pictures/chien.jpg",
       "id" : 9
       },

       {
       "name" : "furet",
       "image" : './pictures/furet.jpg',
       "id" : 8

       },

       {
       "name" : "dino",
       "image" : './pictures/dino.jpg',
       "id" : 12

       },


       {
       "name" : "cheval",
       "image" : './pictures/cheval.jpg',
       "id" : 13

       },

       {
       "name" : "ours",
       "image" : './pictures/ours.jpg',
       "id" : 14

       },

       {
       "name" : "mouton",
       "image" : './pictures/mouton.jpg',
       "id" : 15

       },

       {
       "name" : "furet",
       "image" : './pictures/furet.jpg',
       "id" : 16

       },

       {
       "name" : "chat",
       "image" : './pictures/chat.jpg',
       "id" : 10

       },
              {
              "name" : "cheval",
              "image" : './pictures/cheval.jpg',
              "id" : 5

              },

       ]
// Mélange des cartes du memory

/*
       function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
       shuffle(cards);
       */
       var tiles = [];
       var questionMark = 'https://static.actu.fr/uploads/2013/11/question1-854x1007.jpg'


       for(var i=0;i<cards.length;i++){
         if(this.state.selected == true){
         tiles.push(<Tiles handleClickTilesList = {this.handleClick}  animal={cards[i].name} image = {cards[i].image} id = {i} />)
       } else {
         tiles.push(<Tiles handleClickTilesList = {this.handleClick}  animal={cards[i].name} id = {i} image = {questionMark}/>)
       }
     }

       return (

<div>
         <div>
         <Score signal={this.state.signal} />
         </div>

         <div className="tile back">

         <ul className="tile">
         {tiles}
         </ul>

         </div>

         </div>

              );
            }
           }



module.exports = TilesList;
