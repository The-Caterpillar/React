import React from "react";

const baseURL = "https://api.weatherapi.com/v1/current.json?key=44593ce2eee54de6831184800251201";

export const GetWeatherDataForCity = async(props_city) => {
    const response = await fetch(`${baseURL}&q=${props_city}&aqi=yes`);
    return await response.json();
};