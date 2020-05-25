import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import store from './redux/Store'
import Mobcontainer from './components/Mobcontainer'
import HooksMobContainer from './components/HooksMobContainer'
function App() {
  return (
    <Provider  store={store}>
      <div  className="App">
      <Mobcontainer/>
      <HooksMobContainer />
    </div>
    </Provider>
    
  );
}

export default App;
