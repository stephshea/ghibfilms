import React, { Component } from 'react'
import axios from 'axios'

class News extends Component {

  state = {
    news: []
  }
  componenetDidMount() {
    axios.get ("https://newsapi.org/v2/top-headlines?sources=axios&apiKey=008b9c70e28946ad940974fc70ca425b")
    .then(res => {
      console.log(res.data);
    })
  }

  render() {
  
    return (
      <div className="container">
        <h4 className="center">
          News
        </h4>
      </div>
    )
  }
}

export default News