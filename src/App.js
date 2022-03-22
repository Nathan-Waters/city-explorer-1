import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cityDemands: null,
      cityList: {},
      // variable to store data
      cityData: {}
    }
  }

  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  getCityData = async (e) => {
        //get the data from the API
    // axios is a lightweight way to call method doing heavy lifting of api call
    e.preventDefault();
    let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${YOUR_ACCESS_TOKEN}&q=${SEARCH_STRING}&format=json`);
    console.log(cityData[0]);

    // save that data into state to use and t re-render page with the state change
    this.setState({
      cityData: cityData.data.results
      // add in data on call when using axios
    });
  }

  render() {
    console.log('app state', this.state);

    return (
      <>
        <Header />

        <Main
          cityList={this.state.cityData}
        />

        <Footer />

      </>
    )
  }
}

export default App;
