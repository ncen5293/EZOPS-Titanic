import React, { Component } from 'react';
import axios from 'axios';

class Database extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbResponse: 'start'
    };
  }

  callDatabase = () => {
    axios.get("http://localhost:8080/testDB")
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
      </div>
    );
  }
}

export default Database;
