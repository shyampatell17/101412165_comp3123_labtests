import React from "react";

const WeatherCard = ({ weatherData, forecastData }) => {
    const { main, weather, wind, name } = weatherData;

    // Calculate date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    // Process forecast data (next 5 days at noon)
    const dailyForecast = forecastData
        ? forecastData.list.filter((entry) =>
              entry.dt_txt.includes("12:00:00")
          )
        : [];

    return (
        <div className="card">
            <h2 className="card-title">{name}</h2>
            <p className="card-text">{formattedDate}</p>
            <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt={weather[0].description}
                className="weather-icon"
            />
            <p className="card-text">{weather[0].description.toUpperCase()}</p>
            <p className="card-text">
                Temperature: {(main.temp - 273.15).toFixed(2)}°C
            </p>
            <p className="card-text">
                Feels Like: {(main.feels_like - 273.15).toFixed(2)}°C
            </p>
            <p className="card-text">
                <strong>Humidity:</strong> {main.humidity}%
            </p>
            <p className="card-text">
                <strong>Wind Speed:</strong> {wind.speed} m/s
            </p>

            {/* Forecast Section */}
            {dailyForecast.length > 0 && (
                <div className="forecast">
                    <h3>5-Day Forecast</h3>
                    <div className="forecast-container">
                        {dailyForecast.map((day, index) => (
                            <div className="forecast-item" key={index}>
                                <p>
                                    {new Date(day.dt_txt).toLocaleDateString(undefined, {
                                        weekday: "short",
                                    })}
                                </p>
                                <img
                                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                                    alt={day.weather[0].description}
                                />
                                <p>
                                    {(day.main.temp - 273.15).toFixed(1)}°C
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherCard;
