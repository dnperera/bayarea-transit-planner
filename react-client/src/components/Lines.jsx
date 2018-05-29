import React from 'react';
//import $ from 'jquery';
import axios from 'axios';

class Lines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [],
    };
  }

  componentDidMount() {
    axios.get('api/lines').then(res => {
      this.setState({ lines: [...res.data] });
    });
  }

  render() {
    return (
      <div className="lines-view">
        <div className="selections">
          Choose a line:
          <select>
            {this.state.lines.map((line, index) => {
              return (
                <option key={index} value={line['name']}>
                  {line['name']}
                </option>
              );
            })}
          </select>
        </div>
        <div className="lines-stop-list">
          <ul>
            <li>Hardcoded Stop 1</li>
            <li>Hardcoded Stop 2</li>
            <li>Hardcoded Stop 3</li>
            <li>Hardcoded Stop 4</li>
            <li>Hardcoded Stop 5</li>
            <li>Hardcoded Stop 6</li>
            <li>Hardcoded Stop 7</li>
            <li>Hardcoded Stop 8</li>
            <li>Hardcoded Stop 9</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Lines;
