import React, {useState,useEffect} from 'react';
import axios from "axios"
import DisplayWeatherInfo from './DisplayWeatherInfo';

const CountryDisplay = ({country}) =>{

    const [weather, setWeather] = useState([])
    const city = country[0].capital

    const weatherHook = () => {
        const api_key = process.env.REACT_APP_API_KEY
     axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`)
        .then((response)=>{
            setWeather(response.data)
        })
      }
      useEffect(weatherHook,[city])


    if(Array.isArray(country)){
        country = country[0]
    }
    const f = weather.location
    if(f!==undefined){
        console.log("hey ",weather)
    }
    
    return(
       <div>
           <h2>{country.name}</h2>
           <p>capital {country.capital}</p>
           <p>population {country.population}</p>
           <h3>languages</h3>
           <ul>
               {country.languages.map((language)=> <li key={language.iso639_1}>{language.name}</li>)}
           </ul>
           <img src={country.flag} width="150px"  alt="flag"></img>
          {(weather.location !== undefined)&&(
             <DisplayWeatherInfo weather={weather}/>
          )}
       </div>
    )
}

export default CountryDisplay