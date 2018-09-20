import React, { Component } from 'react'
import axios from 'axios'
import Rainbow from '../hoc/Rainbow'
class Weather extends Component {

  // state = {
  //   weather: []
  // }

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?&units=metric&appid= ae36112ec88d99f153f8a75484b09f50')
    .then(res => {
      // this.setState({
      //   weather: res.data
      // });
      console.log(res);
    })
    // .catch(error => {
    //   console.log('Error', error);
    // });
  };

  render() {
  return (
    <div className="container">
      <h4 className="center">Weather</h4>
    </div>
  )
}
}
export default Rainbow(Weather)