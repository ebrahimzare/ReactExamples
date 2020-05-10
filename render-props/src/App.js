import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Counter from './Counter'
import DecrementClickCounter from './DecrementClickCounter'
import DecrementHoverCounter from './DecrementHoverCounter'




class App extends React.Component {
  render() {
    return (
      <div>
      <Counter render={(decrementEvent, counter)=><DecrementClickCounter ClickHandler={decrementEvent} counter={counter}/>
      } />

      <Counter render={(decrementEvent, counter)=><DecrementHoverCounter ClickHandler={decrementEvent} counter={counter}/>
      } />
      </div>
    )
  }
}

export default App;