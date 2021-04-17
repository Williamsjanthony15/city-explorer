import React from 'react';

class City extends React.Component {
  render() {
    return (
      <>
      <button onClick={this.props.handleSearch}>Explore!</button>
      <h2>{this.props.cityData.display_name}</h2>
      <img src={``}
      </>
    )
  }
}