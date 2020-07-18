import React, { Component } from 'react';
import Form from './components/Form'

const api_key = "441197cce282d1be3ee24fdff5066cc0";

class App extends Component {

  state = {
    city: "",
    country: "",
    des: "",
    maxTemp: "",
    minTemp: "",
    humidity: "",
    error: ""
  }

  getweather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    console.log(city, country);
  
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`)
    const data = await api.json()
    console.log(data);

    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        des: data.weather[0].description,
        maxTemp: data.main.temp_max,
        minTemp: data.main.temp_min,
        humidity: data.main.humidity,
      })
    } else {
      this.setState({
        city: "",
        country: "",
        des: "",
        maxTemp: "",
        minTemp: "",
        humidity: "",
        error: "Missing data "
      })
    }

  }


  render() {
    return (
      <div className="App">
        <Form getweather={this.getweather}
          city={this.state.city}
          country={this.state.country}
          des={this.state.des}
          maxTemp={this.state.maxTemp}
          minTemp={this.state.minTemp}
          humidity={this.state.humidity}
          error={this.state.error}
        />

      </div>
    );
  }

}

export default App;
