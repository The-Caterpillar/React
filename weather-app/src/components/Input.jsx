import React, { useState } from "react";
import {useWeather} from "../context/weather"

const Input = () => {

    const weather = useWeather();
    // console.log("Weather: ",weather);


    return (
        <input
        className="input-field"
        placeholder="Search-Here(City-Name)"
        value={weather.searchCity}
        onChange={(e)=>weather.setSearchCity(e.target.value)}
         />
    );
};


export default Input;