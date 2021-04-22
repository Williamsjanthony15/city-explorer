import axios from 'axios';
import React from 'react';
import Search from './Search';
import Weather from './Weather';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
      city: '',
    }
  }

  handleSearch = () => {

  }

  getLatLong = async (city) => {
    const locationURL = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${city}&format=json`);
    console.log('look at me', locationURL);
    this.setState({
      city: city,
      cityName: locationURL.data[0].display_name,
      lat: locationURL.data[0].lat,
      lon: locationURL.data[0].lon,

    })
  }

  getWeather = (data) => {
    this.setState({
      weather: data,
    })
  }
  render() {
    console.log(this.state);
    console.log('This is the updated state of Weather', this.state.weather);
    return (
      <>
        <Search 
          getLatLong={this.getLatLong}
          cityName={this.state.cityName} 
          lat={this.state.lat} 
          lon={this.state.lon} 
        />
        <Weather weatherResults={this.state.weather} />
      </>
    )
  }
}
export default App;



