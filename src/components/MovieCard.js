import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, imagePath, title, storyline, subtitle } } = this.props;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
        <img src={ imagePath } alt={ title } />
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: {
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }.isRequired,
};

export default MovieCard;
