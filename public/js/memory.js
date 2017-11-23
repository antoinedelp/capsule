var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./home');


class App extends React.Component {

     constructor() {
       super();
     }

     render() {
       return (
        <div>
            <Home/>
        </div>
       );
     }
   }



   ReactDOM.render(
       <div>
           <App/>
       </div>
       ,
       document.getElementById('page')
   );
