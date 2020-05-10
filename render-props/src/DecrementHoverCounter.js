

import React, { Component } from 'react';
class DecrementHoverCounter extends Component {
         render(){
          return(
            <h1 onMouseOver={this.props.Clickhandler}> Click:{this.props.counter}</h1>
          )
        }
        

}

export default DecrementHoverCounter