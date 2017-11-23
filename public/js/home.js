var React = require('react');
var TilesList = require('./tileslist');

class Home extends React.Component {

     constructor() {
       super();

     }
     
     render() {
       return (

         <TilesList/>
       );
     }
    }


    module.exports = Home;


    /*
    this.handleClick = this.handleClick.bind(this);
    this.state = {selected : undefined};
*/


    /*
         handleClick(target){
           this.setState({
             currentTarget: target
           });
         }
    */
