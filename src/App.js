import axios from 'axios';
import React from 'react';
import Search from './Search';
import Weather from './Weather';
import Error from './Error';
import Movies from './Movies';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
      city: '',
      haveSearched: false,
      movies: [],
    }
  }

  getLatLong = async (city) => {
    try {
      const locationURL = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${city}&format=json`);
      this.setState({
        city: city,
        haveSearched: true,
        cityName: locationURL.data[0].display_name,
        lat: locationURL.data[0].lat,
        lon: locationURL.data[0].lon,

      })
    } catch (error) {
      this.setState({
        error: true,
        errorResponse: error.response.data.error,
        errorMessage: error.message
      })
    }
    this.getWeather();
    this.getMovies();
  }

  getWeather = async () => {
    try {
      const cityWeather = await axios.get(`http://localhost:3002/weather`, { params: { lat: this.state.lat, lon: this.state.lon } });
      console.log('Getting Weather Data', cityWeather);
      this.setState({
        weather: cityWeather.data
      })
    } catch (error) {
      this.setState({
        error: true,
        // errorResponse: error.response.data.error,
        errorMessage: error.message,
      })
    }
  }

  getMovies = async () => {
    try {
      const movieData = await axios.get(`http://localhost:3002/movies`, { params: { city: this.state.city}});
      console.log('Getting Movie Data', movieData);
      this.setState({
        movies: movieData.data
      })
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      })
    }
  }

  render() {
    console.log('This is the updated state of Weather', this.state.weather);
    return (
      <>
        <Search
          getLatLong={this.getLatLong}
          cityName={this.state.cityName}
          lat={this.state.lat}
          lon={this.state.lon}
          haveSearched={this.state.haveSearched}
        />
        {this.state.error ? <Error errorMessage={this.state.errorMessage} /> : ''}
        <Weather weatherResults={this.state.weather} />
        <Movies movies={this.state.movies} />
      </>
    )
  }
}
export default App;



