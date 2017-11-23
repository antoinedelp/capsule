var React = require('react');


class Tiles extends React.Component {

     constructor() {
       super();

       this.handleClick = this.handleClick.bind(this);


     }
     handleClick(){
       // premier clic : je retoune l'image
       // deuxième clic, lié au premier clic. FOnction dans fonction? Callback?
       //comparer name 1 et name 2. Si identiques, on les laisse côté animal.
       // si différents, on les remet face cachée

       var target = this.props.id;
       var animalName = this.props.animal;
       this.props.handleClickTilesList(animalName);
       console.log("clic sur l'élément numéro " + target);
       console.log("l'animal cliqué est un  " + target);
     }

     render() {




return (

  <li className="recto" data-target = {this.props.id} onClick={this.handleClick} > <img src={this.props.image}/> </li>

)
}
}

module.exports = Tiles;
