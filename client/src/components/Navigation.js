import React, { Component } from 'react';
import Searchbar from './Searchbar';

class Navigation extends Component {
  render() {
    return (
      <div className="ui fluid three item inverted menu">
        <div className="item">
          <button className="ui primary button">List Unknown Passenger</button>
        </div>
        <div className="item">
          Titanic Passengers
        </div>
        <div className="item">
          <Searchbar onKeyPress={this.props.onSearchEnter} searchValue={this.props.searchValue} onSearchFieldChange={this.props.onSearchFieldChange}/>
        </div>
      </div>
    );
  }
}

export default Navigation;
