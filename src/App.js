import React, { Component } from 'react';
import './App.css';
import MovieCard from './MovieCard'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    try {
      const resp = await fetch('https://api.airtable.com/v0/appEDDJyaWqEleqdN/favourites?api_key=keyRm5oONsGdaQMHW');
      const json = await resp.json();
      this.setState({ movies: json.records })
    } catch (error) {
      console.error(error)
    }

  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row ustify-content-around align-items-center">
          <div className="col">
            <div className="card-deck flex">
              {this.state.movies.map(movie => <MovieCard {...movie.fields} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



//Hard Coded Values
// const movieData = [
//   {
//     title: 'Avengers: Infinity War',
//     year: '2018',
//     description: 'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality.',
//     imageURL: 'https://via.placeholder.com/362x200',
//   },
//   {
//     title: 'Bohemian Rhapsody',
//     year: '2018',
//     description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet.',
//     imageURL: 'https://via.placeholder.com/362x200',
//   },
//   {
//     title: 'The Incredibles 2',
//     year: '2018',
//     description: 'Everyone’s favorite family of superheroes is back in “Incredibles 2” – but this time Helen is in the spotlight, leaving Bob at home with Violet and Dash to navigate the day-to-day heroics of “normal” life.',
//     imageURL: 'https://via.placeholder.com/362x200',
//   },
//   {
//     title: 'The Godfather',
//     year: '1978',
//     description: 'Make him an offfer he cant refuse',
//     imageURL: 'https://via.placeholder.com/362x200',
//   },
//   {
//     title: 'Taxi driver',
//     year: '1978',
//     description: 'Boom..',
//     imageURL: 'https://via.placeholder.com/362x200',
//   },
// ];