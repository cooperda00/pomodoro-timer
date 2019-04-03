import React from "react";
import "./App.css";
import Header from "./components/Header";
import Timer from "./components/Timer";
import AboutModal from "./components/AboutModal";

export default class App extends React.Component {
  state = {
    aboutModalIsOpen: true,
    workInterval: 1500,
    restInterval: 300
  };

  closeModal = () => {
    this.setState({
      aboutModalIsOpen: false
    });
  };

  updateWorkInterval = e => {
    this.setState({
      workInterval: parseInt(e.target.value, 10) * 60
    });
  };

  updateRestInterval = e => {
    this.setState({
      restInterval: parseInt(e.target.value, 10) * 60
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Timer workInterval={this.state.workInterval} />
        <AboutModal
          aboutModalIsOpen={this.state.aboutModalIsOpen}
          closeModal={this.closeModal}
          workInterval={this.state.workInterval}
          restInterval={this.state.restInterval}
          updateWorkInterval={this.updateWorkInterval}
          updateRestInterval={this.updateRestInterval}
        />
      </div>
    );
  }
}
