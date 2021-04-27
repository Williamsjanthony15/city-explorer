import React from 'react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

class Movies extends React.Component {
  render() {
    let movieListGroups;
    if (this.props.movies) {
      movieListGroups = this.props.movies.map((movies, index) => ( 
      <CardColumns key={index}>
      <Card>
        {movies.imgURL? <Card.Img  variant="top" src= {movies.imgURL} />: ''}
        <Card.Body>
          <Card.Title>{movies.title}</Card.Title>
          <Card.Text>{movies.overview}</Card.Text>
        </Card.Body>
      </Card>
      <Card className="p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p> Released on {movies.releasedOn} </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Total Votes:{movies.totalVotes}, 
      Average of Votes: {movies.averageVotes}, 
      Popularity: {movies.popularity}
            </small>
          </footer>
        </blockquote>
      </Card>
    </CardColumns>
      ))
      return movieListGroups;
    }
    else {
      console.log('Not Getting Movie Data');
    }
    return (
      <CardColumns>
        {movieListGroups}
      </CardColumns>
    );
  }
}

export default Movies;