import React, { Component } from 'react';

class Passengers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbResponse: 'start'
    };
  }

  callDatabase = () => {
    fetch("http://localhost:8080/testDB")
      .then(res => res.text())
      .then(res => this.setState({dbResponse: res}))
      .catch(err => err);
  }

  componentDidMount = () => {
    this.callDatabase();
  }

  render() {
    return (
      <div>
        {this.state.dbResponse}
        <table>
          <thead>
            <tr>
              <th className="sort" data-sort="name">name</th>
              <th className="sort" data-sort="age">age</th>
              <th>company</th>
              <th className="sort" data-sort="number">money</th>
              <th>active</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="left">name</td>
              <td style={{"width":"30px"}}>age</td>
              <td className="left">company</td>
              <td className="money">currency</td>
              <td data-render="setActive" className="center"></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Passengers;
