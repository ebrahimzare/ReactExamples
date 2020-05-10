import React, { Component } from 'react';
// class ContextExample extends Component {
//     render() {
//       return <Toolbar theme="dark" />;
//     }
//   }
  
//   function Toolbar(props) {
//     return (
//       <div>
//         <ThemedButton theme={props.theme} />
//       </div>
//     );
//   }
  
//   class ThemedButton extends Component {
//     render() {
//       return <button theme={this.props.theme} />;
//     }
//   }

const ThemeContext = React.createContext('light');

class ContextExample extends Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends Component {
  static contextType = ThemeContext;

  render() {
    return (<div>
        <button theme={this.context} />
        <p>{this.context}</p>
        </div>)
  }
}

export default ContextExample;