import React, { Component } from 'react';
import Tarjeta from './Tarjeta';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>Mi lista de Pokemons</h1>
        <Tarjeta />
      </div>
    );
  }
}

export default App;
