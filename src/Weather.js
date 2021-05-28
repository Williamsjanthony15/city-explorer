import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'


class Weather extends React.Component {
  render() {
    let allListGroups;
    console.log(typeof this.props.weatherResults);
    if (this.props.weatherResults) {
      allListGroups = this.props.weatherResults.map((day, index) => (
        <ListGroup.Item key={index}> {`${day.date}: ${day.description}`} </ListGroup.Item>
      ))
      return allListGroups;
    }
    else {
      console.log('Couldnt Get Weather Data');
    }
    return (
      <ListGroup>
        {allListGroups}
      </ListGroup>
    );
  }
}

export default Weather;