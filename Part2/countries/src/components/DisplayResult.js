import React, {useState} from 'react';
import CountriesDisplay from "./CountriesDisplay"
import CountryDisplay from "./CountryDisplay"

const DisplayResult = ({countries, showClicked, setClicked}) => {
    const [countryClicked, setCountryClicked] = useState([])
    const numCountries = countries.length 
    if(showClicked){
        // console.log(showClicked)
        return (<CountryDisplay country = {countryClicked}/>)
    } else {
        if(numCountries > 10){
            return (
                <p>Too many matches, specify another filter</p>
            )
        }else if(numCountries === 1){
              return (<CountryDisplay country = {countries}/>)
        }else {
              return(
              <CountriesDisplay  
              countries={countries}
              setClicked={setClicked}
              setCountryClicked={setCountryClicked}
              />
              )
        }
    }
  
}

export default DisplayResult