import axios from 'axios';
import React from 'react';
import Search from './Search';
import Weather from './Weather';
import Error from './Error';
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
    try {
      const locationURL = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KE}&q=${city}&format=json`);
      console.log('look at me', locationURL);
      this.setState({
        city: city,
        cityName: locationURL.data[0].display_name,
        lat: locationURL.data[0].lat,
        lon: locationURL.data[0].lon,
  
      })
    } catch (error){
      this.setState({
        error: true,
        errorResponse: error.response.data.error,
        errorMessage: error.message
      })
       
    }
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
        {this.state.error ? <Error errorMessage={this.state.errorMessage} /> : ''}
        <Weather weatherResults={this.state.weather} />
      </>
    )
  }
}
export default App;



