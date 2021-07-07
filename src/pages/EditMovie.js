import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    this.getMovie();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  async handleSubmit(updatedMovie) {
    this.setState({ status: 'loading' });
    await movieAPI.updateMovie(updatedMovie);
    if (this.mounted) {
      this.setState({
        shouldRedirect: true,
      });
    }
  }

  async getMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    if (this.mounted) this.setState({ movie, status: '' });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }

    if (status === 'loading') {
      return (<Loading />);
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

EditMovie.defaultProps = {
  match: {
    params: {
      id: '',
    },
  },
};

export default EditMovie;
