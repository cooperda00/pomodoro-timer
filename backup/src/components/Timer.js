import React from "react";
import { convertTime } from "../Helpers/helpers";
import finishSound from "../assets/MHQuestDepart.mp3";

class Timer extends React.Component {
  state = {
    time: 1500,
    mode: "work"
  };

  getUpdatedTimes = () => {};

  start = () => {
    this.timer = setInterval(
      () =>
        this.setState({
          time: this.state.time - 1
        }),
      1000
    );
  };

  stop = () => {
    clearInterval(this.timer);
  };

  reset = () => {
    this.stop();
    this.setState({
      time: 1500,
      mode: "work"
    });
  };

  changeMode = () => {
    if (this.state.time === 0) {
      this.stop();
      setTimeout(() => {
        if (this.state.mode === "work") {
          this.setState({
            time: 300,
            mode: "break"
          });
        } else if (this.state.mode === "break") {
          this.setState({
            time: 1500,
            mode: "work"
          });
        }
        this.start();
      }, 2000);
    }
  };

  playSound = () => {
    this.myRef = React.createRef();
    if (this.state.time === 0) {
      return <audio ref={this.myRef} src={finishSound} autoPlay />;
    }
  };

  render() {
    return (
      <div>
        <h1>{convertTime(this.state.time)}</h1>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
        <h1>{this.state.mode.toUpperCase()}</h1>
        {this.changeMode()}
        {this.playSound()}
      </div>
    );
  }
}

export default Timer;
