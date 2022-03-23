import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './CityCard.css';
import mapImage from './img/map.jpg';

class CityCard extends React.Component {

  render() {
    let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=10&markers=icon:small-green-cutout|${this.props.cityData.lat},${this.props.cityData.lon}`;
    // console.log('CityCardProps', this.props.cityData);


    return (
      <Col>
        {this.props.displayMap
          ?
          < div className="card-div"  id='div-card' class="w-50 p-3">
            <Card
              border="danger"
              bg="primary"
              className="h-100"
            >
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={mapUrl}
                />
                <Card.Title>City:  {this.props.cityData.display_name}</Card.Title>
                <Card.Text>Latitude: {this.props.cityData.lat}</Card.Text>
                <Card.Text>Longitude: {this.props.cityData.lon}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          :
          < div 
          className="card-div"
          class="w-50 p-3" >
            <Card
              border="danger"
              bg="secondary"
              className="h-100"

            >
              <Card.Body>
                <Card.Img 
                variant="top" 
                src={mapImage}
                />
                <Card.Title>City:  </Card.Title>
                <Card.Text>Latitude: </Card.Text>
                <Card.Text>Longitude: </Card.Text>
              </Card.Body>
            </Card>
          </div>

        }
      </Col>

    );
  }
}
export default CityCard;