import React from 'react';
import App from './App';

class Tarjeta extends React.Component {

    render() {
      console.log(this);
    
        return (
          <div className="tarjeta">
            <img  />
            <h2> 
              {this.name}
            </h2>
           <ul>
              <li>Hola</li>
            </ul>
          </div>
        );
      }
  }

export default Tarjeta;