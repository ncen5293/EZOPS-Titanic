import React, { Component } from 'react';

class Searchbar extends Component {
  render() {
    return (
      <div className="ui icon input">
        <input
          type="text"
          value={this.props.searchValue}
          onChange={this.props.onSearchFieldChange}
          placeholder="Search for passenger..."
          onKeyPress={this.props.onKeyPress}
        />
        <i aria-hidden="true" className="search icon"></i>
      </div>
    );
  }
}

export default Searchbar;
