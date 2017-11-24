var Button = require('react-bootstrap').Button
var Badge = require('react-bootstrap').Badge
var React = require("react");

class Score extends React.Component {
  constructor() {
    super();
    this.signalWin = this.signalWin.bind(this);
    this.signalLost = this.signalLost.bind(this);
    this.state = {
      turnPlayer1: true,
      scorePlayer1: 0,
      scorePlayer2: 0,
      win: 6,
      message: ""
    };
    this.badge = {
      color: "grey",
      borderRadius: "10px"
    };
  }

  componentWillReceiveProps(newProps) {
    this.signalWin(newProps);
    this.signalLost(newProps);
  }

  signalWin(newProps) {
    if (newProps.signal == "win") {
      if (this.state.turnPlayer1 == true) {
        this.setState({
          scorePlayer1: this.state.scorePlayer1 + 1
        });
      } else {
        this.setState({
          scorePlayer2: this.state.scorePlayer2 + 1
        });
      }
      if (this.state.scorePlayer1 == this.state.win - 1) {
        //Swal("GAGNE", "success");
        this.setState({
          message: "Le Joueur 1 a gagné",
          scorePlayer1: 0,
          scorePlayer2: 0
        });
      }
      if (this.state.scorePlayer2 == this.state.win - 1) {
        //Swal('GAGNE');
        this.setState({
          message: "Le Joueur 2 a gagné",
          scorePlayer1: 0,
          scorePlayer2: 0
        });
      }

      if (this.state.scorePlayer1 == 0 && this.state.scorePlayer2 == 0) {
        this.setState({
          message: ""
        });
      }
    }
  }

  signalLost(newProps) {
    if (newProps.signal == "lost") {
      if (this.state.turnPlayer1 == true) {
        this.setState({
          turnPlayer1: false
        });
      } else {
        this.setState({
          turnPlayer1: true
        });
      }
    }
  }

  render() {
    console.log(this.props.signal);
    console.log(this.state);
    return (
      <div style={this.badge}>
        <center>
          <h3>Score joueur 1</h3>
          <p>
            <Badge>{this.state.scorePlayer1}</Badge>
          </p>
          <h3>Score joueur 2</h3>
          <p>
            <Badge>{this.state.scorePlayer2}</Badge>
          </p>
          <h3>{this.state.message}</h3>
        </center>
      </div>
    );
  }
}

module.exports = Score;
