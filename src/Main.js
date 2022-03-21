import React from 'react';
import axios from 'axios';

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      city: '',
      cityList: {},

      // variable to store data
      starWarsData:[],
      cityData: {}
    }
  }

//   handleCityInput = (e) => {
//     this.setState({
//       city: e.target.value
//     })
//   }

// // two keywords for axios
//   handleStarWars = async(e) => {
//     //get the data from the API
//     // axios is a lightweight way to call method doing heavy lifting of api call
//     e.preventDefault();
//     let starWarsCharacters = await axios.get('https://swapi.dev/api/people/?page=1');
//     console.log(starWarsCharacters);

//     // save that data into state to use and t re-render page with the state change
//     this.setState({
//       starWarsData: starWarsCharacters.data.results
//       // add in data on call when using axios
//     });
//   }



//   getCityData = async(e) => {
//     e.preventDefault();
//     let cityData = await axios.get('ENTER THE URL YOU NEED HERE!!!!');
//     console.log(cityData[0]);
//   }



  render() {
    console.log('main props', this.props);
    console.log('main state', this.state);
    let starWarsListItems = this.state.starWarsData.map((character,idx) => {
     return <li key={idx}>{character.name}</li>
    });


    return (
      <main>
        <form onSubmit={this.getCityData}>
          <label>Pick a City
            {/* goal of next week is to have this button trigger an api call */}
            <input type="text" onInput={this.handleCityInput} name="city" />
          </label>
          <button type='submit'>Find City</button>
        </form>

        <ul>
          {starWarsListItems}
        </ul>
      </main>
    )
  }
}

export default Main