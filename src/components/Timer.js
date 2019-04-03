//Modules
import React from "react";
//Helpers
import { convertTime } from "../Helpers/helpers";
//Assets
import finishSound from "../assets/sound.mp3";

export default class Timer extends React.Component {
  playSound = () => {
    this.myRef = React.createRef();
    if (this.props.timer === 0) {
      return <audio ref={this.myRef} src={finishSound} autoPlay />;
    }
  };

  render() {
    return (
      <div style={timerStyle}>
        <h1 style={{ fontSize: "5rem" }}>{convertTime(this.props.timer)}</h1>
        <div>
          <button
            onClick={this.props.start}
            style={{ marginRight: "5px" }}
            className="btn"
          >
            Start
          </button>
          <button
            onClick={this.props.stop}
            style={{ marginRight: "5px" }}
            className="btn"
          >
            Stop
          </button>
          <button onClick={this.props.reset} className="btn">
            Reset
          </button>
        </div>

        <h1 style={{ marginTop: "15px" }}>
          - {this.props.mode.toUpperCase()} MODE -
        </h1>
        {this.playSound()}
      </div>
    );
  }
}

//Styles
const timerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
