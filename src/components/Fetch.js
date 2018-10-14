import React, {Component} from 'react';

class Fetch extends Component {
    state = {
        film:[]

    };

    fetchData = async (film) => {
        const data = await fetch(`http://www.omdbapi.com/?s=${film}&apikey=4b10f1ee`);
        const json = await data.json();
        this.setState({film:json})
    };
    render() {
        this.fetchData("john wick");
        return (
            <div>

            </div>
        );
    }
}

export default Fetch;