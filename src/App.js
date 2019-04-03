//Modules
import React from "react";
//CSS
import "./App.css";
//Components
import Header from "./components/Header";
import Timer from "./components/Timer";
import AboutModal from "./components/AboutModal";

export default class App extends React.Component {
  state = {
    aboutModalIsOpen: false,
    workInterval: 300,
    restInterval: 60,
    timer: 300,
    mode: "work"
  };

  closeModal = () => {
    this.setState({
      aboutModalIsOpen: !this.state.aboutModalIsOpen
    });
  };

  updateWorkInterval = e => {
    this.setState({
      workInterval: parseInt(e.target.value, 10) * 60,
      timer: parseInt(e.target.value, 10) * 60
    });
  };

  updateRestInterval = e => {
    this.setState({
      restInterval: parseInt(e.target.value, 10) * 60
    });
  };

  //Timer Methods
  start = () => {
    this.timer = setInterval(() => {
      if (this.state.timer > 0) {
        this.setState({
          timer: this.state.timer - 1
        });
      }
    }, 1000);
  };

  stop = () => {
    clearInterval(this.timer);
  };

  reset = () => {
    this.stop();
    this.setState({
      timer: this.state.workInterval,
      mode: "work"
    });
  };

  setToWork = () => {
    this.setState({
      timer: this.state.workInterval
    });
  };

  changeMode = () => {
    if (this.state.timer === 0) {
      this.stop();
      setTimeout(() => {
        if (this.state.mode === "work") {
          this.setState({
            mode: "break",
            timer: this.state.restInterval
          });
        } else if (this.state.mode === "break") {
          this.setState({
            mode: "work",
            timer: this.state.workInterval
          });
        }
        this.start();
      }, 2000);
    }
  };

  //////////////////////////////////////////////////////////////

  render() {
    return (
      <div className="App">
        <Header closeModal={this.closeModal} stop={this.stop} />
        <Timer
          timer={this.state.timer}
          start={this.start}
          stop={this.stop}
          reset={this.reset}
          setToBreak={this.setToBreak}
          setToWork={this.setToWork}
          changeMode={this.changeMode}
          mode={this.state.mode}
        />
        <AboutModal
          aboutModalIsOpen={this.state.aboutModalIsOpen}
          closeModal={this.closeModal}
          workInterval={this.state.workInterval}
          restInterval={this.state.restInterval}
          updateWorkInterval={this.updateWorkInterval}
          updateRestInterval={this.updateRestInterval}
        />
        {this.changeMode()}

        {/* Copyright */}
      </div>
    );
  }
}
