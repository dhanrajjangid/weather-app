import React, { useState, useEffect } from "react";
import WeatherDetails from "./WeatherDetails";

function Card({ tempInfo }) {
  const [weatherState, setWeatherState] = useState("")

  const { 
    temp, 
    description, 
    name, 
    country,
    sunset,
    humidity,
    pressure,
    speed
  } = tempInfo;

  let sec = sunset;
  let data = new Date(sec * 1000);
  let timeStr = `${data.getHours()}:${data.getMinutes()}`

  useEffect(() => {
    if(description) {
      switch(description) {
        case "clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "haze":
          setWeatherState("wi-day-haze");
          break;
        case "sunny":
          setWeatherState("wi-day-sunny");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;

      } 
    }
  }, [description])
  

  return (
    <>
      <div className="card-parent">
        <div className="date">{new Date().toLocaleString()}</div>

        

        <div className="weather-info">
        <div>
          <i className={`wi ${weatherState}`}></i>
        </div>
          <div className="temperature">
            <span>{temp} °C</span>
          </div>

          <div className="description">
            <div className="weather-condition">{description}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="weather-details">
          <div className="weather-items">
            <p>{timeStr} PM</p> <p>Sunset</p>
          </div>
          <div className="weather-items">
            <p>{humidity}%</p> <p>Humidity</p>
          </div>
          <div className="weather-items">
            <p>{pressure} hPa</p> <p>Pressure</p>
          </div>
          <div className="weather-items">
            <p>{speed} Km/h</p> <p>Speed</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
