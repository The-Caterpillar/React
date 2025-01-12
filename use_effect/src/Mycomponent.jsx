import React, { useEffect, useState } from "react";

const Mycomponent = () =>  {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(100);

    useEffect(()=>{
        console.log('My component is mounting');

        // return function ()
        // {
        //     console.log("Unmounting Mycomponent");
        // };
        return (
            console.log("Unmounting")
        );
    },[]);

    useEffect(()=>{
        console.log('Count got updated');
        return (
            console.log("Returning count: ",count)
        )
    },[count,count2]);

    return (
        <div>
            <p>Count is {count}</p>
            <button onClick={() => setCount(count+1)}>Update Count</button>
            <p>Count2 is {count2}</p>
            <button onClick={() => setCount2(count2+1)}>Update Count2</button>
        </div>
    );
};

export default Mycomponent;