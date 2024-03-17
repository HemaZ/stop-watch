import React from "react";

class Laps extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{ color: "white" }}>Laps</h2>
        <table className="laps">
          <tr>
            <th>#</th>
            <th>Start</th>
            <th>End</th>
            <th>Duration</th>
          </tr>
          {this.props.laps.map((lap, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{lap.start / 1000}</td>
                <td>{lap.end / 1000}</td>
                <td>{lap.duration / 1000}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Laps;
