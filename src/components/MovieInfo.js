import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieInfo extends Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, genre, rating, subtitle } = movie;

    return (
      <div className="movie-info">
        <p>
          <span className="titles">Title:</span>
          { title }
        </p>
        <p>
          <span className="titles">Subtitle:</span>
          { subtitle }
        </p>
        <p>
          <span className="titles">Storyline:</span>
          { storyline }
        </p>
        <p>
          <span className="titles">Genre:</span>
          { genre }
        </p>
        <p>
          <span className="titles">Rating:</span>
          { rating }
        </p>
      </div>
    );
  }
}

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieInfo;
