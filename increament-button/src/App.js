import React, {useState} from 'react';

const Button=({increment, onClickFunction})=>{
  const handlClick=()=>{    onClickFunction(increment)  }
  return <button onClick={handlClick}>+{increment} </button>
}

  

const App=()=> {
const [count, setCount]=useState(0)
  const incrementCount = increment => {
    setCount(count+increment)
  }
  const incrementCount2 = increment => {
    setCount(count*increment)
  }
      return (
         <div>
         <Button increment={1} onClickFunction={incrementCount}/>
         <Button increment={10} onClickFunction={incrementCount2}/>
         <Button increment={20} onClickFunction={incrementCount}/>
         <Button increment={100} onClickFunction={incrementCount}/>
         <span>{count} </span>
         </div>
      );
   
}


export default App;