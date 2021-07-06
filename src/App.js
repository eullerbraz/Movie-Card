import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route
            exact
            path="/movies/:id"
            render={ (propsRouter) => <MovieDetails { ...propsRouter } /> }
          />
          <Route
            path="/movies/:id/edit"
            render={ (propsRouter) => <EditMovie { ...propsRouter } /> }
          />
          <Route path="" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
