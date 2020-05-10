import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


class Mouse extends React.Component {
    static propTypes = {
      render: PropTypes.func.isRequired
    }
  
    state = { x: 0, y: 0 }
  
    handleMouseMove = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      })
    }
  
    render() {
      console.log("mouse", this.state)
      return (
        <div onMouseMove={this.handleMouseMove}>
          {this.props.render(this.state)}
        </div>
      )
    }
  }
  
  class Cat extends React.Component {
    render() {
      const {x, y} = this.props.mouse;
  
      return (
        <button style={{ position: 'absolute', left: x, top: y, height: 50 }} />
      );
    }
  }
  
  class RenderPropsExample extends React.Component {
    render() {
      return (
        <div>
          <div>
            <Mouse render={({ x, y }) => (
              <h1>The mouse position is ({x}, {y})</h1>
            )}/>
          </div>
  
          
          <div>
            <Mouse render={({ x, y }) => (
              <Cat mouse={{ x, y }} />
            )}/>
          </div>
        </div>
      )
    }
  }
  

export default RenderPropsExample;
