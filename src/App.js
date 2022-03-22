import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // variable to store data
      cityData: {}
    }
  }

  // EVENT LISTENER TO HAVE STATE CHANGE OF CITY DATA ON APP.JS AND THE LISTENER WILL LIVE IN MAIN
  handleCityData = (e) => {
    console.log('app city data coming in', e.target.value);
    this.setState({
      cityData: e.target.value
    })
  }

  render() {
    // console.log('app state', this.state);
    // console.log('app props', this.props);
    return (
      <>
        <Header />

        <Main
          handleCityData={this.handleCityData}
        />
        <Footer />
      </>
    )
  }
}
export default App;
