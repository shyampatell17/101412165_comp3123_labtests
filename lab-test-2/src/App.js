import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";

const App = () => {
    const [city, setCity] = useState("Toronto");
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);

    const API_KEY = "57ca8006ba13ed932329bb5055937caf";

    const fetchWeather = async (cityName) => {
        try {
            const weatherResponse = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
            );
            setWeatherData(weatherResponse.data);

            const forecastResponse = await axios.get(
                `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
            );
            setForecastData(forecastResponse.data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    useEffect(() => {
        fetchWeather(city);
    }, [city]);

    return (
        <div className="container">
            <h1>Weather Forecast</h1>
            <SearchBar setCity={setCity} />
            {weatherData && <WeatherCard weatherData={weatherData} forecastData={forecastData} />}
        </div>
    );
};

export default App;
