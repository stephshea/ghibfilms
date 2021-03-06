import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import FilmList from './Components/FilmList'
import Weather from './Components/Weather'
import News from './Components/News'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/FilmList' component={FilmList} /> 
          <Route path='/Weather' component={Weather} />
          <Route path='/News' component={News} />
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
