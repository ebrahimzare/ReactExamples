

import React, { Component } from 'react';
class Increment extends Component {
    constructor(){
        super();
        this.state={
            count:0,
        }
    }
    makeIncrementer = amount => () =>
        {this.setState(prevState => ({
          count: prevState.count + amount,
        }), ()=>{console.log(this.state.count);}
        
        )
    };

   
    
     makeDescrementer=amount => () => this.setState(prevState => ({
        count: prevState.count -amount,
      }));
    
     

      increment = this.makeIncrementer(1);
      descrement=this.makeDescrementer(1);
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}> Increment</button>
                <button onClick={this.descrement}> Descrement</button>
                
            </div>
        );
    }
}



export default Increment;