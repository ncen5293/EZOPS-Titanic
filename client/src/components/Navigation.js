import React, { Component } from 'react';
import Searchbar from './Searchbar';
import CreatePassengerModal from './CreatePassengerModal';

class Navigation extends Component {
  render() {
    return (
      <div className="ui fluid three item inverted menu">
        <div className="item">
          <CreatePassengerModal
            createPassengerSubmit={this.props.createPassengerSubmit}
            passengerFirstName={this.props.passengerFirstName}
            passengerLastName={this.props.passengerLastName}
            passengerSex={this.props.passengerSex}
            passengerSurvived={this.props.passengerSurvived}
            handlePassengerFirstNameChange={this.props.handlePassengerFirstNameChange}
            handlePassengerLastNameChange={this.props.handlePassengerLastNameChange}
            handlePassengerSexChange={this.props.handlePassengerSexChange}
            handlePassengerSurvivalChange={this.props.handlePassengerSurvivalChange}
          />
        </div>
        <div className="item">
          Titanic Passengers
        </div>
        <div className="item">
          <Searchbar
            onKeyPress={this.props.onSearchEnter}
            searchValue={this.props.searchValue}
            onSearchFieldChange={this.props.onSearchFieldChange}
          />
        </div>
      </div>
    );
  }
}

export default Navigation;
