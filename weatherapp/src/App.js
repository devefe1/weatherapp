import React, { Component } from 'react';

import axios from 'axios';
import './App.css';

const apikey = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
     }
  }

async componentDidMount () {
  try {
  const weather = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=Brooklyn&appid=${apikey}`)
  this.setState({data: weather.data.list});
  console.log(this.state.data);
  } catch(e) {
    console.log('error', e)
  }
  
}
      render() { 
        
        return ( 
          <div>
        {this.state.data.map(forecast => (
         <div>
             <h1> Max {forecast.main.temp_min} </h1>
             <h1> Min {forecast.main.temp_max} </h1>
             <p> {forecast.weather[0].description} </p>
         </div>
         ))}
         </div>
          );
        }
      }

 
export default App;