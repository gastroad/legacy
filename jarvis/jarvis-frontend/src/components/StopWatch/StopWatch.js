import React from "react";
import TimeElapsed from "./TimeElapsed";

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    ["lap", "update", "reset", "toggle"].forEach(method => {
      this[method] = this[method].bind(this);
    });

    this.state = this.initialState = {
      isRunning: true,
      lapTimes: [],
      timeElapsed: 0
    };
  }
  componentDidMount() {
    this.startTimer();
  }
  toggle() {
    this.setState({ isRunning: !this.state.isRunning }, () => {
      this.state.isRunning ? this.startTimer() : clearInterval(this.timer);
    });
  }
  lap() {
    const { lapTimes, timeElapsed } = this.state;
    this.setState({ lapTimes: lapTimes.concat(timeElapsed) });
  }
  reset() {
    clearInterval(this.timer);
    this.setState(this.initialState);
  }
  startTimer() {
    this.startTime = Date.now();
    this.timer = setInterval(this.update, 10);
  }
  update() {
    const delta = Date.now() - this.startTime;
    this.setState({ timeElapsed: this.state.timeElapsed + delta });
    this.startTime = Date.now();
  }
  render() {
    const { isRunning, lapTimes, timeElapsed } = this.state;
    return (
      <div>
        <TimeElapsed
          id="timer"
          timeElapsed={timeElapsed}
          clearInterval={() => {
            clearInterval(this.timer);
          }}
          member={this.props.member}
          next={this.props.next}
          isRunning={isRunning}
          toggle={this.toggle}
        />
      </div>
    );
  }
}
