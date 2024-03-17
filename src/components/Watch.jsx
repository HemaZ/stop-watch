import React from "react";
import "./Watch.css";
import Laps from "./Laps";
class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_time: new Date(),
      current_time: new Date(),
      last_lap: 0,
      laps: [],
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((state) => {
        return { ...state, current_time: new Date() };
      });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  start = () => {
    this.setState((state) => {
      return {
        ...state,
        current_time: new Date(),
        start_time: new Date(),
        last_lap: 0,
      };
    });
  };

  saveLap = () => {
    const currentLaps = [...this.state.laps];
    const end = new Date() - this.state.start_time;
    const duration = end - this.state.last_lap;
    let newLap = { start: this.state.last_lap, end: end, duration: duration };
    currentLaps.push(newLap);
    console.log(currentLaps);
    this.setState((state) => {
      return { ...this.state, laps: currentLaps, last_lap: newLap.end };
    });
  };

  clearLaps = () => {
    this.setState((state) => {
      return { ...this.state, laps: [], last_lap: 0 };
    });
  };
  render() {
    return (
      <div className="watch">
        <div className="buttons">
          <button onClick={this.start}>Start / Reset</button>
          <button onClick={this.saveLap}>Lap</button>
          <button onClick={this.clearLaps}>Clear Laps</button>
        </div>
        <h2 className="time">
          {(this.state.current_time - this.state.start_time).toLocaleString() +
            " "}
          Seconds
        </h2>
        <Laps laps={this.state.laps} />
      </div>
    );
  }
}

export default Watch;
