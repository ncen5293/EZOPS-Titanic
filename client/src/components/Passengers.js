import React, { Component } from 'react';
import PassengerTable from './PassengerTable';
import axios from 'axios';

class Passengers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbResponse: 'start',
      passengersList: []
    };
  }

  callDatabase = () => {
    axios.get("http://localhost:8080/titanicapi")
      .then(res => {
        this.setState({dbResponse: res.data})
      })
  }

  getAllPassengers = () => {
    axios.get("http://localhost:8080/titanicapi/getAllPassengers")
      .then(res => {
        this.setState({passengersList: res.data})
        console.log(res.data);
      })
  }

  componentDidMount = () => {
    this.callDatabase();
    this.getAllPassengers();
  }

  createNewPassenger = () => {
    const newPassenger = {
      PassengerId: this.state.passengersList[this.state.passengersList.length-1].PassengerId + 1,
      Survived: 1,
      Pclass: 2,
      Name: 'Cent, Nick',
      Sex: 'male',
      Age: 22,
      SibSp: 1,
      Parch: 0,
      Ticket: 12345,
      Fare: 0.00,
      Cabin: '',
      Embarked: 'S'
    };

    axios.post("http://localhost:8080/titanicapi/createNewPassenger", newPassenger)
    .then(res => {
        console.log(res.data.personExists);
    })
    .catch(error => {
      console.error(error)
    })
  }

  render() {
    return (
      <div>
        {this.state.dbResponse}
        <button onClick={this.createNewPassenger}>Create new Passenger</button>
      </div>
    );
  }
}

export default Passengers;
