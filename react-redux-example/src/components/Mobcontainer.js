import React from 'react';
import {buyMob} from '../redux'

import {connect} from 'react-redux'
function Mobcontainer(props)  {
    console.log ('props is', props);
   
        return (
            <div>
                <h1>Number of Mobiles = {props.numberOfMobs}</h1>
                <button onClick={props.buyMob}> Buy </button>
            </div>
        );
    
}
const mapStateToProps= state=>{
    return{
        numberOfMobs:state.numberOfMobs
    }
} 

const mapDispatchToProps=dispatch=>{
    return{
        buyMob:()=> dispatch(buyMob())

        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Mobcontainer);