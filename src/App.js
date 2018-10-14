import React, { Component } from 'react';
import './App.css';
import Movie from "./components/Movie/Movie";
import data from "./components/data/data"



class App extends Component {
    state = {
        film:[]
    };

    // FetthData = async (film) => {
    //     const data = await fetch(`http://www.omdbapi.com/?s="${film}"&apikey=4b10f1ee`)
    //     const json = await Object.keys(data.json());
    //     this.setState({film:json})
    // };
    componentDidMount() {
        const film = "terminator";
        fetch(`http://www.omdbapi.com/?s="${film}"&apikey=4b10f1ee`)
            .then(response => response.json())
            .then(response => this.setState({film:response}))
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
