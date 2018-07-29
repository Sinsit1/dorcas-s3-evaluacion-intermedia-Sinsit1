import React from 'react';
import Tarjeta from './Tarjeta';

class Lista extends React.Component {

    render() {
      let {
        pokemons
      } = this.props; // saco el array del objeto this.props
      return (
        <ul className= "lista-grid" > 
          {pokemons.map(function (pokemons) {
                return ( <Tarjeta 
                  name = {pokemons.name}
                  img = {pokemons.url}
                  types = {pokemons.types}
                  id = {pokemons.id}
                  />)
                })
            }
        </ul>
      )

      }
    }

    export default Lista;