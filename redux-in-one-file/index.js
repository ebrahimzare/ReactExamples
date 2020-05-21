const redux= require('redux');
const createStore=redux.createStore;
const reduxLogger= require('redux-logger');
const applyMiddleware=redux.applyMiddleware;


const logger=reduxLogger.createLogger();
const BUY_MOB='BUY_MOB';

function buyMob(){
  return {
    type: BUY_MOB,
    info:'first action'
  }
}

const initialState={
  numOfMobs:100
}

const reducer=(state=initialState, action)=>{
  switch(action.type){
    case BUY_MOB: return {
      ...state,
      numOfMobs: state.numOfMobs-1
    }

    default: return state
  }
}

const store= createStore( reducer, applyMiddleware(logger));
console.log("state is ", store.getState());
const unsubscribe=store.subscribe( ()=>{}
    // ()=>console.log('update store is ', store.getState())
    );

store.dispatch(buyMob());
store.dispatch(buyMob());
unsubscribe();