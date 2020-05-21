const redux= require('redux');
const createStore=redux.createStore;

const applyMiddleware=redux.applyMiddleware;
const thunkMiddleware= require('redux-thunk').default
const axios=require('axios')


const initialState={
    loadning:false,
    users:[],
    error:''
}

const FETCH_USERS_REQUEST='FETCH_USERS_REQUEST';
const FETCH_DATA_SUCCESS='FETCH_DATA_SUCCESS';
const FETCH_USERS_FAILTURE='FETCH_USERS_FAILTURE';

const fetchUserRequest=()=>{
    return{
        type:FETCH_USERS_REQUEST,
    }
}

const fetchDataSuccess=users=>{
    return{
        type:FETCH_DATA_SUCCESS,
        payload:users
        
    }
}

const fetchDataFailture=error=>{
    return{
        type:FETCH_USERS_FAILTURE,
        payload:error
    }
}


const reducer=(state=initialState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:return{
            ...state,
            users:action.payload
        }

        case FETCH_DATA_SUCCESS:return{
            ...state,
            users:action.payload
        }

        case FETCH_USERS_FAILTURE: return{
            ...state,
            error:action.payload
        }

        default: {return state}
    }

}


//asynic action creator 
const fetchUser=()=>{
    return function(dispatch){
        axios.get('http://fakerestapi.azurewebsites.net/api/Users')
            .then(Response=>{
                
                const users=Response.data
                dispatch(fetchDataSuccess(users))

            }).catch(error=>{
                dispatch(fetchDataFailture(error.message))
            })
    }
}


const store= createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUser())