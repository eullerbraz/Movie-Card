import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading, Header } from '../components';
import './MovieDetails.css';
import MovieInfo from '../components/MovieInfo';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = {
      loading: true,
      movie: {},
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    this.fetchMovie();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true });
    const requestMovie = await movieAPI.getMovie(id);
    if (this.mounted) {
      this.setState({
        loading: false,
        movie: requestMovie,
      });
    }
  }

  async deleteMovie() {
    const { movie: { id } } = this.state;
    this.setState({ loading: true });
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { loading, movie } = this.state;
    const { match: { params: { id } } } = this.props;
    if (loading) return <Loading />;

    const { imagePath } = movie;

    return (
      <div data-testid="movie-details" className="body background">
        <div className="modal">
          <Header />
          <main className="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <MovieInfo movie={ movie } />
          </main>
          <div className="buttons-container">
            <Link to="/" className="button">VOLTAR</Link>
            <Link to={ `/movies/${id}/edit` } className="button">EDITAR</Link>
            <Link to="/" onClick={ this.deleteMovie } className="button">DELETAR</Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

MovieDetails.defaultProps = {
  match: {
    params: {
      id: '',
    },
  },
};

export default MovieDetails;
