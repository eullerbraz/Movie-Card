import React from 'react';
import PropTypes from 'prop-types';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div className="row">
        <label htmlFor="movie_title">
          <input
            className="input validate"
            placeholder="Título"
            id="movie_title"
            type="text"
            value={ title }
            onChange={ (event) => this.updateMovie('title', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div className="row">
        <label htmlFor="movie_subtitle">
          <input
            className="input"
            placeholder="Subtítulo"
            id="movie_subtitle"
            type="text"
            value={ subtitle }
            onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row">
        <label htmlFor="movie_image">
          <input
            className="input"
            placeholder="Link da imagem"
            id="movie_image"
            type="text"
            value={ imagePath }
            onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div className="row">
        <label htmlFor="movie_storyline">
          <textarea
            placeholder="Sinopse"
            className="input"
            id="movie_storyline"
            value={ storyline }
            onChange={ (event) => this.updateMovie('storyline', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <div className="row">
        <label htmlFor="movie_genre">
          <select
            className="input"
            id="movie_genre"
            value={ genre }
            onChange={ (event) => this.updateMovie('genre', event.target.value) }
          >
            <option value="">Gênero</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
            <option value="romance">Romance</option>
          </select>
        </label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <div className="row">
        <label htmlFor="movie_rating">
          <input
            className="input"
            placeholder="Avaliação (0-5)"
            id="movie_rating"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            value={ rating }
            onChange={ (event) => this.updateMovie('rating', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div className="row">
        <div>
          <button
            className="button"
            type="button"
            onClick={ this.handleSubmit }
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <form className="movie-form">
        {this.renderTitleInput()}
        {this.renderSubtitleInput()}
        {this.renderImagePathInput()}
        {this.renderStorylineInput()}
        {this.renderGenreSelection()}
        {this.renderRatingInput()}
        {this.renderSubmitButton()}
      </form>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }),
  onSubmit: PropTypes.func,
};

MovieForm.defaultProps = {
  movie: {
    id: 0,
    title: '',
    subtitle: '',
    storyline: '',
    rating: null,
    imagePath: '',
    bookmarked: false,
    genre: '',
  },
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
