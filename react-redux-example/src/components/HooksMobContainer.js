import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {buyMob} from '../redux'

const HooksMobContainer = () => {
    const numberOfMobiles= useSelector(state=>state.numberOfMobs);
    const dispatch= useDispatch()
    return (
        <div>
            <h2>Number of Mobiles is: {numberOfMobiles}</h2>
            <button onClick={()=>dispatch(buyMob())}> Buy</button>
        </div>
    );
};

export default HooksMobContainer;