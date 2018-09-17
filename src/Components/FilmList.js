import React, { Component } from 'react'
import axios from 'axios'

class FilmList extends Component {
//   state = {
//     films: []
//   }

  componentDidMount() {
    axios.get('https://ghibliapi.herokuapp.com/films/')
    .then(res => {
      // const films = res.data;
      // this.setState({ films });
      console.log(res);
      
      })
    }
  
    render() {
      return (
        <div className="container">
          <h4 className="center">Films</h4>
          <p>testing films component</p>
        </div>
        // <ul>
        //   { this.state.films.map(film => <li>{film.title}</li>)}
        // </ul>
      )
    }
    
  // render() {
  //     const { films } = this.state;
  //     const filmList = films.length ? films.map(film => {
  //       return(
          
  //         <div>
  //           {film.title}
  //         </div>
          
  //       )
  //     }) : "There are no films";

  //     return (
  //       <div className="container">
  //         <h4 className="center">
  //           films
  //         </h4>
  //         {filmList}
  //       </div>
  //     )
  //   }
  
// var api = ghibliapi;

// $(document).ready(function(){
// $.getJSON(api, function(data){

// console.log(data[12].title);
// for(var i = 0;  i <data.length;  i++) {
// console.log(data[i].title);
// }

// })
// })
  }

  export default FilmList