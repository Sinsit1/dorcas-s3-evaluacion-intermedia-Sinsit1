import React, { Component } from 'react';
import Lista from './Lista';

class App extends Component {
  render() {
    let pokemons=this.props.pokemons;
    return (
      <div className="App">
        <h1>Mi lista de Pokemons</h1>
        <Lista pokemons = {pokemons}/>
      </div>
    );
  }
}

export default App;
