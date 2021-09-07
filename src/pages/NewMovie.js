import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading, Header } from '../components';
import * as movieAPI from '../services/movieAPI';
import './NewMovie.css';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: '',
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    this.setState({ status: 'loading' });
    await movieAPI.createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { status, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }

    if (status === 'loading') {
      return (<Loading />);
    }

    return (
      <div data-testid="new-movie" className="body background">
        <div className="modal">
          <Header />
          <main className="new-movie">
            <MovieForm onSubmit={ this.handleSubmit } />
          </main>
        </div>
      </div>
    );
  }
}
export default NewMovie;
