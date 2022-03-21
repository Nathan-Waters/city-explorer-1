import React from 'react';

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      city: '',
      cityList: {}
    }
  }

  handleCity = (e) => {
    this.setState({
      city: e.target.value
    })
  }



  render() {
    console.log('main props', this.props);
    console.log('main state', this.state);


    return (
      <main>
        <form>
          <label>Pick a City
            {/* goal of next week is to have this button trigger an api call */}
            <input type="text" onInput={this.handleCity} name="city" />
          </label>
          <button type='submit'>Find City</button>
        </form>
      </main>
    )
  }
}

export default Main