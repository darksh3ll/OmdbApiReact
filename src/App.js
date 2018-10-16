import React, { Component } from 'react';
import './App.css';
import Movie from "./components/Movie/Movie";
import Alert from "./components/Alert";



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
        if (this.state.film.length > 0) {
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
            return (
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
                    <h1>plop</h1>
                </div>
                )

        }

  }


export default App;
