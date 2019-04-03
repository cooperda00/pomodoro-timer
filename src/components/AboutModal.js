//Modules
import React from "react";
import ReactModal from "react-modal";

export default class AboutModal extends React.Component {
  render() {
    return (
      <ReactModal
        isOpen={this.props.aboutModalIsOpen}
        onRequestClose={this.props.closeModal}
        ariaHideApp={false}
        style={modalStyles}
      >
        <div
          style={{ float: "right", padding: "5px", cursor: "pointer" }}
          onClick={this.props.closeModal}
        >
          X
        </div>
        <div style={container}>
          <h1 style={{ textAlign: "center" }}>Pomodoro Timer</h1>
          <ul style={list}>
            <li>Increase your prouctivity with Pomodoro Timer!</li>
            <li>Alternate between work and rest periods to keep you fresh!</li>
            <li>
              Make sure to get up and move during your break! Go get a drink of
              water, pop a squat, do some pullups!
            </li>
            <li>
              The default ratio is 25 minutes of work // 5 minutes of rest!
            </li>
            <li>Change the intervals below!</li>
          </ul>
          <label style={{ fontWeight: "bold", marginBottom: "10px" }}>
            {" "}
            Work Interval:
            <input
              type="number"
              name="work"
              value={this.props.workInterval / 60}
              onChange={this.props.updateWorkInterval}
              style={inputStyle}
            />
          </label>

          <label style={{ fontWeight: "bold" }}>
            {" "}
            Rest Interval:
            <input
              type="number"
              name="rest"
              value={this.props.restInterval / 60}
              onChange={this.props.updateRestInterval}
              style={inputStyle}
            />
          </label>
          <div
            style={{
              fontSize: "10px",
              width: "50%",
              margin: "2rem auto 0 auto",
              textAlign: "center"
            }}
          >
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/prosymbols"
              title="Prosymbols"
            >
              Prosymbols
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
            >
              CC 3.0 BY
            </a>
          </div>
        </div>
      </ReactModal>
    );
  }
}

//Styling
const container = {
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  marginTop: "10px"
};

const list = {
  marginTop: "20px",
  marginLeft: "20px",
  marginBottom: "10px"
};

const inputStyle = {
  marginLeft: "15px",
  display: "block",
  marginTop: "5px"
};

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(50, 50, 50, 0.6)"
  },
  content: {
    position: "absolute",
    margin: "0 auto",
    height: "65%",
    width: "80%",
    maxWidth: "850px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "15px",
    outline: "none",
    padding: "20px"
  }
};
