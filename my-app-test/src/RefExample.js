import React, { Component } from 'react';

class RefExample extends Component {
    constructor(){
        super()
        this.inputref=React.createRef()
    }

    componentDidMount(){
        this.inputref.current.focus()
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputref}/>
                
            </div>
        );
    }
}

export default RefExample;