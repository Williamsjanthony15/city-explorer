import React from 'react';
import Search from 'Search.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <h2>Hello!</h2>
      </>
    )
  }
}
export default App;


// in form submit

this.getWeatherData;

getWeatherData = async () => {
  const weatherData = await axios.get('http://localhost:3002/weather') // String for  now of server city data
  console.log('this works', weatherData);
  this.setState({
    weatherData: weatherData.data
  })
}

