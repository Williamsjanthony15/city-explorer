import React from 'react';
import axios from 'axios';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      weatherData: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const weatherData = await axios.get('http://localhost:3002/weather')
    console.log('this works', weatherData);
    
    this.setState({
      weatherData: weatherData.data
    });
    this.props.getWeather(weatherData.data)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.textInput} />
        <button type="submit">Explore!</button>
      </form>
    )
  }
}


export default Search;