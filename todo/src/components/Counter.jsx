import React, { useState } from "react";

const Counter = () => {

    const [count,setCount] = useState(0);
   
    // var value = "Even";
    // console.log("Hello",count);

    return(
        <div>
            <p>Count component: {count}</p>
            <button onClick={() => setCount(count+1)}>
                Increment
            </button>
            <button onClick={() => setCount(count-1)}>
                Decrement
            </button>
            <p>
                Value is:
                {(count%2) === 0 ? ' Even' : ' Odd'}
            </p>
        </div>
    );
};

export default Counter;