import React, { Component } from 'react';
import Header from './Header';

class Loading extends Component {
  render() {
    return (
      <div className="body">
        <Header />
        <span className="loading">Carregando...</span>
      </div>
    );
  }
}

export default Loading;
