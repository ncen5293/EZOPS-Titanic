import React, { Component } from 'react';
import Navigation from './Navigation';
import PassengerTable from './PassengerTable';
import axios from 'axios';

class Passengers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbResponse: 'start',
      passengersList: [],
      searchValue: '',
      passengerFirstName: '',
      passengerLastName: '',
      passengerSex: 'male',
      passengerSurvived: false
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
      })
  }

  componentDidMount = () => {
    this.callDatabase();
    this.getAllPassengers();
  }

  // createNewPassenger = () => {
  //   const newPassenger = {
  //     PassengerId: this.state.passengersList[this.state.passengersList.length-1].PassengerId + 1,
  //     Survived: 1,
  //     Pclass: 2,
  //     Name: 'Cent, Nick',
  //     Sex: 'male',
  //     Age: 22,
  //     SibSp: 1,
  //     Parch: 0,
  //     Ticket: 12345,
  //     Fare: 0.00,
  //     Cabin: '',
  //     Embarked: 'S'
  //   };
  //
  //   axios.post("http://localhost:8080/titanicapi/createNewPassenger", newPassenger)
  //   .then(res => {
  //       console.log(res.data.personExists);
  //   })
  //   .catch(error => {
  //     console.error(error)
  //   })
  // }

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

  createPassengerSubmit = () => {
    const newPassenger = {
      PassengerId: this.state.passengersList[this.state.passengersList.length-1].PassengerId + 1,
      Survived: 1 ? this.state.passengerSurvived : 0,
      Pclass: 1,
      Name: `${this.state.passengerLastName}, ${this.state.passengerFirstName}`,
      Sex: this.state.passengerSex,
      Age: 90,
      SibSp: 0,
      Parch: 0,
      Ticket: 12345,
      Fare: 0.00,
      Cabin: '',
      Embarked: ''
    };
    axios.post("http://localhost:8080/titanicapi/createNewPassenger", newPassenger)
    .then(res => {
        console.log(res.data.personExists);
    })
    .catch(error => {
      console.error(error)
    })
    this.setState({passengerFirstName: '', passengerLastName: '', passengerSex: 'male', passengerSurvived: false});
  }

  handlePassengerFirstNameChange = (event) => {
    this.setState({passengerFirstName: event.target.value});
  }

  handlePassengerLastNameChange = (event) => {
    this.setState({passengerLastName: event.target.value});
  }

  handlePassengerSexChange = (event) => {
    this.setState({passengerSex: event.target.value});
  }

  handlePassengerSurvivalChange = (event) => {
    this.setState((state) => {
      return {passengerSurvived: !state.passengerSurvived};
    });
  }

  // {this.state.dbResponse}
  // <button onClick={this.createNewPassenger}>Create new Passenger</button>

  render() {
    return (
      <div className="header">
        <Navigation
          onSearchEnter={this.onSearchEnter}
          searchValue={this.state.searchValue}
          onSearchFieldChange={this.onSearchFieldChange}
          createPassengerSubmit={this.createPassengerSubmit}
          passengerFirstName={this.state.passengerFirstName}
          passengerLastName={this.state.passengerLastName}
          passengerSex={this.state.passengerSex}
          passengerSurvived={this.state.passengerSurvived}
          handlePassengerFirstNameChange={this.handlePassengerFirstNameChange}
          handlePassengerLastNameChange={this.handlePassengerLastNameChange}
          handlePassengerSexChange={this.handlePassengerSexChange}
          handlePassengerSurvivalChange={this.handlePassengerSurvivalChange}
        />
        <PassengerTable
          passengersList={this.state.passengersList}
        />
      </div>
    );
  }
}

export default Passengers;
