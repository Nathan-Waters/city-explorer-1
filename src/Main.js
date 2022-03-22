import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      city: '',
      cityData: {},
      error: false,
      errorMessage: ``,
      showCityData: false
    }
  }

  getMainCityData = async (e) => {
    //get the data from the API
    // axios is a lightweight way to call method doing heavy lifting of api call
    e.preventDefault();
    try {
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      console.log(cityData.data[0]);
      // this.props.handleCityData(mainCityData.data.display_name[0]);
      // save that data into state to use and t re-render page with the state change
      this.setState({
        cityData: cityData.data[0],
        showCityData: true
      });
    } catch (error) {
      console.log('error.response', error.response);
      this.setState({
        error: true,
        errorMessage: `An error occurred: ${error.response.status}`
      })
    }
  }


  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }


  render() {
    console.log('city data', this.state.cityData);

    // for conditional rendering after data coming in correctly
    // let cityResult = this.state.receivedCityData.map(city, index) => {
    //   console.log(index);
    //   return {<

    //     />}
    // };
    // console.log('main props', this.props);
    // console.log('main state', this.state.receivedCityData);

    return (
      <main>

        <form onSubmit={this.getMainCityData}>
          <label>Pick a City
            <input
              type="text"
              onInput={this.handleCityInput}
              name="city"
            />

          </label>
          <button type='submit'>Explore!</button>
        </form>

        {this.state.error
          ?
          <Container>
            <Col>
              <Row xs={1} sm={1} md={2} lg={3} xl={4}></Row>
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
            <Row xs={1} sm={1} md={2} lg={3} xl={4}></Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{this.state.cityData.display_name}</Card.Title>
                  <Card.Subtitle>
                    {this.state.cityData.lat} , {this.state.cityData.lon}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          </Container>
        }
      </main>
    )
  }
}

export default Main