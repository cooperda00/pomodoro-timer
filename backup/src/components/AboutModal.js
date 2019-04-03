import React from "react";
import ReactModal from "react-modal";

export default class AboutModal extends React.Component {
  render() {
    return (
      <ReactModal
        isOpen={this.props.aboutModalIsOpen}
        onRequestClose={this.props.closeModal}
        ariaHideApp={false}
      >
        <div
          style={{ float: "right", padding: "5px", cursor: "pointer" }}
          onClick={this.props.closeModal}
        >
          X
        </div>

        <h1>Pomodoro Timer</h1>
        <ul>
          <li>Increase your prouctivity with Pomodoro Timer!</li>
          <li>Alternate between work and rest periods to keep you fresh!</li>
          <li>
            Make sure to get up and move during your break! Go get a drink of
            water, pop a squat, do some pullups!
          </li>
          <li>The default ratio is 25m work // 5m rest!</li>
          <li>Change the intervals below!</li>
        </ul>
        <label>
          {" "}
          Work Interval:
          <input
            type="number"
            name="work"
            value={this.props.workInterval / 60}
            onChange={this.props.updateWorkInterval}
          />
        </label>

        <label>
          {" "}
          Rest Interval:
          <input
            type="number"
            name="rest"
            value={this.props.restInterval / 60}
            onChange={this.props.updateRestInterval}
          />
        </label>
      </ReactModal>
    );
  }
}
