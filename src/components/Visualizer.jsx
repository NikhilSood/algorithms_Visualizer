import React, {Component} from 'react';

import "./Visualizer.css";

export default class Visualizer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { array } = this.props;

    return (
      <div className="array-container">
        {array.map((value, index) => (
          <div
            className="array-bar border border-dark"
            key={index}
            style={{ height: `${value / 10}%`, width: `${100 / 60}%` }}
          ></div>
        ))}
      </div>
    );
  }
}
