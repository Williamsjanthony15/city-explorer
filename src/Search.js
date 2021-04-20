import axios from 'axios';
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
    // console.log(this.textInput.current.value);
    this.setState({
      city: this.textInput.current.value,
    })
    console.log(this.state.city);
    this.getLatLong();
    // const weatherData = await axios.get('http://localhost:3002/weather')
    // // console.log('Confirm Working', weatherData);

    // this.setState({
    //   weatherData: weatherData.data
    // });
    // this.props.getWeather(weatherData.data)
  }

  getLatLong = async (city) => {
    const locationURL = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`);
    console.log('this is our location url!', locationURL);
    this.setState({
      cityName: locationURL.data[0].display_name,
      lat: locationURL.data[0].lat,
      lon: locationURL.data[0].lon,

    })
    console.log(this.state.cityName, this.state.lat, this.state.lon);
  }

  render() {
    // console.log('this is a city!', this.citySearch);
    return (
      <Jumbotron>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.textInput} />
          <button type="submit">Explore!</button>
        </form>
        <h2>{this.state.cityName}</h2>
        <h3>{this.state.lat}, {this.state.lon}</h3>
      </Jumbotron>
    )
  }
}


export default Search;