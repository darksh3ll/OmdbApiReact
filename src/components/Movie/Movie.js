import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {
    state = {
      favorite:true
    };
    // toogleFavorite = () => {
    //     this.setState({favorite:!this.state.favorite});
    // };
    render() {
        // const titre = this.state.favorite? <p>lolo</p>:<p>lulu</p>;
        return (
                <div className="Movie">
                    <img src={this.props.Poster} alt="#"/>
                    <div className="meta">

                       <span>{this.state.favorite}</span>
                        <h4 className="Title">{this.props.Title}</h4>
                        {/*<button onClick={()=>this.toogleFavorite()}>{titre}</button>*/}
                        <span className="Year">{this.props.Year}</span>
                    </div>
                </div>


        );
    }
}

Movie.defaultProps = {
    Title: "plop",
    Poster: "https://vignette.wikia.nocookie.net/theflophouse/images/0/0a/No-image-available.png/revision/latest?cb=20140219035154",
    Year:1200
};


export default Movie;