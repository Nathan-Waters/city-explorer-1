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
      cityList: {}
    }
  }


  // event handler for eventual thing
  handleSelectedCity = (city) => {
    this.setState({
      cityDemands: "nice"
    })
  }



  render() {
    console.log('app state', this.state);

    return (
      <>
        <Header />

        <Main
          cityList={this.state.cityList}
        />

        <Footer />

      </>
    )
  }
}

export default App;
