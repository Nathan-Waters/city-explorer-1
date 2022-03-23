import React from 'react';
import { Button, Form } from 'react-bootstrap';


class SearchForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
    }
  }

  searchCity = () => {
    let city = this.state.searchQuery;
    this.props.handleCityInput(city);
    this.setState({
      searchQuery: ''
    })
  }

  render() {
    return (
      <>
        <Form className="search">
          <Form.Group>
            <Form.Label> Pick a City!</Form.Label>
            <Form.Control type="text" onChange={this.searchCity} />
            <Button onClick={this.searchCity}>Explore!</Button>
          </Form.Group>
        </Form>



      </>
    )
  }
}

export default SearchForm;