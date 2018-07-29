import React from 'react';
import './index.css';
class Tarjeta extends React.Component {

    render() {
    const pokemons=this.props;
      const types= pokemons.types;
      console.log(types);
    
        return (
          <div className="tarjeta">
            <img className='images' alt="imagen"  src={pokemons.img}/>
            <h2 className='name'> 
              {pokemons.name}
            </h2>
            <ul className='habilities'>
              {
                types.map( (types) =>{
                  return ( 
                    <li className='card'>{types} </li>
                    )
                  })
              }
            </ul>
          </div>
        );
      }
  }

export default Tarjeta;