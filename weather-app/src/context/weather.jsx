import { createContext, useContext, useState } from "react";
import { GetWeatherDataForCity } from "../API"
const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {

    const [data,setData] = useState(null);
    const [SearchCity,setSearchCity] = useState(null);

    const fetchData = async() => {
        const response = await GetWeatherDataForCity(SearchCity);
        setData(response);
    }

    return (
        <WeatherContext.Provider
            value={{SearchCity,data,setSearchCity,fetchData}} >
            {props.children}
        </WeatherContext.Provider>
    );
};