import React from 'react';


const DisplayWeatherInfo = ({weather}) => {
    return(
        <div>
            <h3>Weather in {weather.location.name}</h3>
            <p><b>temperature:</b> {weather.current.temperature} </p>
            {weather.current.weather_icons.map((weather_icon,  i)=>(
                <img key={i} src={weather_icon} width="50px"  alt="weather-icons"></img>
            ))}
            <p><b>wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
        </div>
    )
}

export default DisplayWeatherInfo