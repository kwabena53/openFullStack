import React from 'react';
import Country from "./Country"



const CountriesDisplay = ({countries, setCountryClicked, setClicked}) =>{
    return (
        countries.map((country) => 
        <Country 
        key={country.alpha3Code}
        setCountryClicked={setCountryClicked}
        country={country}
        setClicked={setClicked}
        />
        )
    )
}

export default CountriesDisplay