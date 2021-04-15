import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData = React.createRef()
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.textInput.current.value);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.group>
          <Form.Label></Form.Label>
          <Form.Control></Form.Control>
        </Form.group>
        <Button type="submit" variant="primary"> Explore! </Button>
      </Form>
    );
  }
}