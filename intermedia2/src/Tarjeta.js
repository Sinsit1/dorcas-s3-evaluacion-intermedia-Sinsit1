import React from 'react';
import App from './App';

class Tarjeta extends React.Component {

    
    render() {
      console.log (this.props);
        return (
          <div className="tarjeta">
            <img />
            <h2> Hola </h2>
           <ul>
              <li>Hola</li>
            </ul>
          </div>
        );
      }
  }

export default Tarjeta;