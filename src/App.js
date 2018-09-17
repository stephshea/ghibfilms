import React, { Component } from 'react';
// import FilmList from './Components/FilmList'
import axios from 'axios'

class App extends Component {
  state = {
    films: []
  }
  componentDidMount() {
    axios.get('https://ghibliapi.herokuapp.com/films/')
    .then(res => {
    
      console.log(res);
        this.setState({ 
          films: res.data.slice(0,5) 
        });
      })
    }
  render() {
    const { films } = this.state;
    const filmList = films.length ? ( 
      films.map(film => {
        return (
          <React.Fragment>
          <div className="film card" key={film.id}>
            <div className="card-content">
              <span className="card-title blue-text text-darken-1">{film.title}</span>
              <span className="blue-text text-darken-2">Director: {film.director}, Producer: {film.producer}</span>
              <p>{film.description}</p>
            </div>
          </div>
          </React.Fragment>
        )
      })
    ) : (
      <div className = "center">No films
      </div>
    )
    return (
      <div className="container">
        <h4 className="center">
          Films
        </h4>
        {filmList}
      </div>
    )
  }
}
export default App;
