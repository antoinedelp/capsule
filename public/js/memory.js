var React = require("react");
var ReactDOM = require("react-dom");
var Home = require("./home");

//var Button = ReactBootstrap.Button;
//var Badge = ReactBootstrap.Badge;

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("page")
);
