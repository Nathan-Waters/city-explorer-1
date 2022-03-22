import React from 'react';
import axios from 'axios';

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      city: '',
      cityList: {},


    }
  }

  



  render() {
    console.log('main props', this.props);
    console.log('main state', this.state);

    


    return (
      <main>
        <form onSubmit={this.getCityData}>
          <label>Pick a City
            {/* goal of next week is to have this button trigger an api call */}
            <input type="text" onInput={this.handleCityInput} name="city" />
          </label>
          <button type='submit'>Explore!</button>
        </form>

        <ul>
          {starWarsListItems}
        </ul>
      </main>
    )
  }
}

export default Main