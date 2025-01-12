// import React, { use } from "react";
import { useWeather } from "../context/weather";

const Card = () => {

    const weather = useWeather();


    return (
        <div className="card">
            <img src={weather?.data?.current?.condition?.icon} alt="MY_Pic"/>
            <h2>{weather.data?.current?.temp_c}
                <sup>0</sup>C
            </h2>
            <h5>{weather.data?.location?.name}, {weather.data?.location?.region}, {weather.data?.location?.country} <br/>
                {weather.data?.location?.tz_id} <br/>
                {weather.data?.location?.localtime}
            </h5>
        </div>
    );
};


export default Card;