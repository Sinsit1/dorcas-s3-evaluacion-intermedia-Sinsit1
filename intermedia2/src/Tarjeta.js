import React from 'react';

class Tarjeta extends React.Component {
  

    render() {
      console.log(this);
    
        return (
          <div className="tarjeta">
            <img  src={this.img}/>
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