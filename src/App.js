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
    <Search getWeather = {this.getWeather} />
    <Weather weatherResults = {this.state.weather} /> 
    </>
  )
}
}
export default App;



