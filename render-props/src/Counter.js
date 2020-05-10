import React, { Component } from 'react';
class Counter extends Component {
    constructor(){
        super();
        this.state={
            counter:100
        }
    }
    ClickHandler =  () =>{
      this.setState((prevState) => {
          return {counter: prevState.counter-1}
        })
        }

        render(){
          return(
            <div>
              {this.props.render(this.ClickHandler, this.state.counter)}
            </div>
          )
        }
        

}

export default Counter