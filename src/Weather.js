import { render } from '@testing-library/react';
import React from 'react';

class Weather extends React.Component{
 render() {
   let allListGroups = this.props.weatherData.map((day, index) => {
     <listGroup.Item key={index}> {`${day.date}: ${day.description}`} </listGroup.Item>
   })
   return (
     <ListGroup>
       {allListGroups}
     {/* <h2> {this.props.weatherData[0].data</h2>
     <h2> {this.props.weatherData[0].description</h2> */}
    </ListGroup>
   );
 }
}