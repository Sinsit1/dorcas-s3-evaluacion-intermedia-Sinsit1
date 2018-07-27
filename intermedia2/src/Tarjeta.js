import React from 'react';

class Tarjeta extends React.Component {
  

    render() {
      console.log(this.props);
    
        return (
          <div className="tarjeta">
            <img alt="imagen"  src={this.props.img}/>
            <h2> 
              {this.props.name}
            </h2>
           <ul>
              <li>Hola</li>
            </ul>
          </div>
        );
      }
  }

export default Tarjeta;