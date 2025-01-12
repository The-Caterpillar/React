import React, {useState,useEffect} from "react";

const Timer = () => {

    const [time, setTime] = useState(10);

    useEffect(()=>{

        console.log("Adding new interval");
        const timer = setInterval(() => setTime(time+1),1000);

        return function() {
            console.log("Removing interval from stack");
            clearInterval(timer)
        };
    },[time]);

    return (
        <div>
            <h1> STopWatch</h1>
            <p>Current Time is {time}</p>
        </div>
    );
};

export default Timer;