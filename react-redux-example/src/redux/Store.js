import {createStore} from 'redux'
import mobReducer from './mob/MobReducer'

 const Store= createStore(mobReducer)
 export default Store