import React, {useState} from 'react';




const CountryDisplay = ({country}) =>{
    if(Array.isArray(country)){
        country = country[0]
    }

    console.log("hey", ((country)))
    return(
       <div>
           <h2>{country.name}</h2>
           <p>capital {country.capital}</p>
           <p>population {country.population}</p>
           <h3>languages</h3>
           <ul>
               {/* {country.languages.map((language)=> <li key={language.iso639_1}>{language.name}</li>)} */}
           </ul>
           <img src={country.flag} width="150px"  alt="flag"></img>
       </div>
    )
}







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

const Country = ({country, setCountryClicked, setClicked}) => {

    const showCountry = (event) =>{
        setClicked(true)
        const country = event.target.value
        setCountryClicked([{0:country}])
    }
    return(
        <>
            <p>{country.name} <button value={country} onClick={showCountry}>show</button></p>
        </>
    )
}

const DisplayResult = ({countries}) => {
    const [showClicked, setClicked] = useState(false)
    const [countryClicked, setCountryClicked] = useState([])

    

    const numCountries = countries.length 
    if(showClicked){
        // console.log(showClicked)
        return (<CountryDisplay country = {countryClicked}/>)
        return (
            <p>hey</p>
        )
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