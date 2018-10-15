import React, { Component } from 'react';
import './App.css';
import Movie from "./components/Movie/Movie";
import data from "./components/data/data"



class App extends Component {
    state = {
        film:[]
    };


    componentDidMount() {
        const film = "terminator";
        fetch(`http://www.omdbapi.com/?s="${film}"&apikey=4b10f1ee`)
            .then(response => response.json())
            .then(response => this.setState({film:response.Search}))
    }

    render() {
        console.log(this.state.film);

        return (
      <div className="App">

              {
                this.state.film.map((movie,key) => {
                    return (
                            <Movie
                                key={key}
                                Poster = {movie.Poster}
                                Title = {movie.Title}
                                Year={movie.Year}
                            />
                        )
                })
              }
          </div>


    );
  }
}

export default App;
