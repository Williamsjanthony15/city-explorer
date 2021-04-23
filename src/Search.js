import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      weatherData: '',
      city: '',
      cityName: '',
      lat: '',
      lon: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.getLatLong(this.textInput.current.value);
  }


  render() {
    return (
      <>
      <h1>City Explorer</h1>
      <h3>Where would you like to go?</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.textInput} />
          <button type="submit">Explore!</button>
        </form>
        {
          this.props.haveSearched ? 
        <Jumbotron>
          <h2>{this.props.cityName}</h2>
          <h3>{this.props.lat}{this.props.lon}</h3>
          <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.lat},${this.props.lon}&zoom=10`} alt={this.props.cityName} />
        </Jumbotron> : 
        ''
        }
      </>
    )
  }
}


export default Search;
