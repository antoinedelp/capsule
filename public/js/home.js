var React = require('react');
var TilesList = require('./tileslist');
var Score = require('./score');

class Home extends React.Component {

     constructor() {
       super();

     }

     render() {
       return (
        <div>


         <TilesList/>

         </div>
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
