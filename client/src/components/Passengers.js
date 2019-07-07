import React, { Component } from 'react';
import Navigation from './Navigation';
//import PassengerTable from './PassengerTable';
import axios from 'axios';

class Passengers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbResponse: 'start',
      passengersList: [],
      searchValue: ''
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
        this.setState({passengersList: res.data});
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

  onSearchEnter = (event) => {
    if (event.key === 'Enter') {
      console.log(event.target.value);
      axios.post("http://localhost:8080/titanicapi/findPassenger", {Name: event.target.value})
      .then(res => {
          console.log(res.data.passenger);
          if (res.data.passenger) {
            this.setState({passengersList: res.data.passenger});
          }
          this.setState({searchValue: ''});
      })
      .catch(error => {
        console.error(error)
      })
    }
  }

  onSearchFieldChange = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    return (
      <div className="header">
        <Navigation onSearchEnter={this.onSearchEnter} searchValue={this.state.searchValue} onSearchFieldChange={this.onSearchFieldChange}/>
        {this.state.dbResponse}
        <button onClick={this.createNewPassenger}>Create new Passenger</button>
      </div>
    );
  }
}

export default Passengers;
