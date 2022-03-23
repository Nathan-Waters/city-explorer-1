import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CityCard from './CityCard';
import './Main.css';


class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      city: '',
      cityData: {},
      error: false,
      errorMessage: ``,
      cityMap: [],
      displayMap: false
    }
  }

  getMainCityData = async (e) => {
    //get the data from the API
    // axios is a lightweight way to call method doing heavy lifting of api call
    e.preventDefault();
    try {
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      // console.log(cityData.data[0]);
      this.setState({
        cityData: cityData.data[0],
        displayMap: true
      });

    } catch (error) {
      // console.log('error.response', error.response);
      this.setState({
        error: true,
        errorMessage: `An error occurred: ${error.response.status}`
      })
    }
  }


  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    });
  }


  render() {
    // console.log('city data', this.state.cityData);
    // console.log('city map data', this.state.cityMap);
    return (
      <main>

        <form onSubmit={this.getMainCityData}>
          <label>Pick a City:

          </label>
            <input
              type="text"
              onInput={this.handleCityInput}
              name="city"
            />
          <button type='submit'>Explore!</button>
        </form>

        {this.state.error
          ?
          <Container>
            <Col>
              <Row xs={1} sm={1} md={1} lg={1} xl={1}></Row>
              <Card className="errorCard h-100" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{this.state.errorMessage}</Card.Title>
                  <Card.Text>
                    Sorry, but an error has occurred.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Container>
          :
          <Container>
            <Row xs={1} sm={1} md={1} lg={1} xl={1}></Row>
            <Col>
           
                  <CityCard
                  cityData={this.state.cityData}
                  displayMap={this.state.displayMap}
                  />
                  
            </Col>
          </Container>
        }
      </main>
    )
  }
}

export default Main