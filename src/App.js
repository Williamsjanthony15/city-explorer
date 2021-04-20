import React from 'react';
import Search from './Search';
import Weather from './Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import City from './City';

// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
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


// in form submit


