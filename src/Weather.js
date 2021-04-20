import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'


class Weather extends React.Component{
 render() {
   let allListGroups;
   if (this.props.weatherResults.length > 0) {
   allListGroups = this.props.weatherResults.map((day, index) => (
     <ListGroup.Item key={index}> {`${day.date}: ${day.description}`} </ListGroup.Item>
   ))
   return allListGroups;
  }
   else {
     console.log('Didnt Work');
  }
   return (
     <ListGroup>
       {allListGroups}
    </ListGroup>
   );
 }
}

export default Weather;