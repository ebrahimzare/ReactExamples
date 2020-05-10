

import React, { Component } from 'react';
class DecrementClickCounter extends Component {
         render(){
          return(
            <button onClick={this.props.Clickhandler}> Click:{this.props.counter}</button>
          )
        }
        

}

export default DecrementClickCounter