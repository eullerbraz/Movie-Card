import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, imagePath, title, storyline, subtitle } } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={ imagePath } alt={ title } />
        <div className="info-container">
          <div>
            <h1>{ title }</h1>
            <h3>{ subtitle }</h3>
          </div>
          <p>{ storyline }</p>
          <Link to={ `/movies/${id}` } className="button">VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: {
    id: 0,
    title: '',
    subtitle: '',
    storyline: '',
    imagePath: '',
  },
};

export default MovieCard;
