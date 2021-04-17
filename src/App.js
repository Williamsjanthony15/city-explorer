import React from 'react';
import Search from './Search';
import Weather from './Weather';
import 'bootstrap/dist/css/bootstrap.min.css';

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


