import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import Logo from '../logo.png';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState({ loading: true });
    const requestAPI = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: requestAPI,
    });
  }

  render() {
    const { loading, movies } = this.state;

    if (loading) return (<Loading />);

    return (
      <div data-testid="movie-list" className="body">
        <header className="header">
          <img
            src={ Logo }
            alt="Movie Card Logo"
          />
        </header>
        <main className="movies-list">
          {
            movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          }
        </main>
        <div className="add">
          <Link to="movies/new" className="button">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
