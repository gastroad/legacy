import React from "react";
import { Circle, Line } from "rc-progress";

export default class TimeElapsed extends React.Component {
  getUnits() {
    const seconds = this.props.timeElapsed / 1000;
    return {
      min: Math.floor(seconds / 60).toString(),
      sec: Math.floor(seconds % 60).toString(),
      msec: (seconds % 1).toFixed(3).substring(2),
      Tper: (seconds / 150) * 100,
      Mper: ((seconds % 30) / 30) * 100,
      Hper: ((seconds % 10) / 10) * 100,
      per: (seconds % 1) * 100,
      seconds: seconds
    };
  }

  leftPad = (width, n) => {
    if ((n + "").length > width) {
      return n;
    }
    const padding = new Array(width).join("0");
    return (padding + n).slice(-width);
  };
  render() {
    const units = this.getUnits();

    return (
      <div id={this.props.id}>
        <div className={"info"}>
          <h1>{this.props.member}</h1>
          <h2>
            <span>{this.leftPad(2, units.min)}:</span>
            <span>{this.leftPad(2, units.sec)}.</span>
            <span>{units.msec}</span>
          </h2>
        </div>
        <div style={{ position: "relative", maxHeight: "500px" }}>
          <Circle
            percent={units.Mper}
            strokeWidth="10"
            strokeColor={"rgb(69,133,241)"}
            style={{
              width: "60%",
              maxWidth: "350px"
            }}
          />
          <Circle
            percent={units.Hper}
            strokeWidth="10"
            strokeColor={"rgb(233,72,61)"}
            style={{
              width: "40%",
              maxWidth: "300px"
            }}
          />
          <Circle
            percent={units.per}
            strokeWidth="10"
            strokeColor={"rgb(56,167,86)"}
            style={{
              width: "20%",
              maxWidth: "250px"
            }}
          />
        </div>
        <Line
          percent={units.Tper}
          strokeWidth="10"
          strokeColor="rgb(250,189,44)"
          style={{
            width: "80%",
            maxWidth: "500px"
          }}
        />
        <button
          className={"btn sub"}
          onClick={this.props.toggle}
          style={{
            left: "5%",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          }}
        >
          {this.props.isRunning ? "stop" : "run"}
        </button>
        <button
          className={"btn sub"}
          onClick={() => {
            this.props.next(units.min, units.sec, units.seconds);
          }}
          style={{
            right: "5%",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }}
        >
          next
        </button>
      </div>
    );
  }
}
