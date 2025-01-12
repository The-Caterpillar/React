import React, {useEffect, useState} from 'react';
import './App.css';
// import Mycomponent from './Mycomponent';
import Timer from './Timer'

function App() {
  // const [isVisible,setVisible] = useState(true);

  // useEffect(()=>{
  //   console.log("App is mounting...");
  // },[]);

  return (
    <div>
      {/* <button onClick={()=>setVisible(!isVisible)}>Toggle</button>
      {isVisible ? <Mycomponent/> : <></>} */}

      <Timer/>

    </div>
  );
}

export default App;

// Child components mount before their parent completes mounting.