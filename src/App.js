import React, { Component } from 'react';
import './App.css';
import Movie from "./components/Movie/Movie";



class App extends Component {
    state = {
        film:[],
        value:""
    };
    fetchData = async () => {
        const film = this.state.value;
        await fetch(`http://www.omdbapi.com/?s="${film}"&apikey=4b10f1ee`)
            .then( response => response.json())
            .then(response => this.setState({film:response.Search}))
    };

    start =() => {
        this.fetchData()
    };

    search = (e)=> {
        this.setState({value:e.target.value});
};

    render() {
        return (
      <div className="App">
          <div className="nav">
              <button onClick={()=>this.start()}>GO</button>
              <div>
                  <input
                      className="input"
                      type="text"
                      placeholder="Search movies"
                      value={this.state.value}
                      onChange={e =>this.search(e)}
                  />
              </div>
          </div>

            <div className="cards">
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
      </div>


    );
  }
}

export default App;
