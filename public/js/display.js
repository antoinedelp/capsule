//var Button = ReactBootstrap.Button;
//var Badge = ReactBootstrap.Badge;
var React = require("react");
var Score = require("./score");

class Display extends React.Component {
  constructor() {
    super();
    this.handleClickG = this.handleClickG.bind(this);
    this.handleClickP = this.handleClickP.bind(this);
    this.state = { signal: "" };
    this.badge = {
      color: "grey",
      borderRadius: "10px"
    };
  }

  handleClickG() {
    this.setState({
      signal: "win"
    });
  }

  handleClickP() {
    this.setState({
      signal: "lost"
    });
  }

  render() {
    return (
      <div style={this.badge}>
        <center>
          <h1> App count </h1>
          <Button
            onClick={this.handleClickG}
            type="button"
            bsSize="small"
            bsStyle="success"
          >
            GAGNE
          </Button>
          <Button
            onClick={this.handleClickP}
            type="button"
            bsSize="small"
            bsStyle="success"
          >
            PERDU
          </Button>
          <Score signal={this.state.signal} />
        </center>
      </div>
    );
  }
}

module.exports = Display;
