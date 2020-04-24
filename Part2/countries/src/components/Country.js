import React from 'react';


const Country = ({country, setCountryClicked, setClicked}) => {

    const showCountry = (event) =>{
        setClicked(true)
        const country = event.target.value
        setCountryClicked([JSON.parse(country)])
    }
    return(
        <>
            <p>{country.name} <button value={JSON.stringify(country)} onClick={showCountry}>show</button></p>
        </>
    )
}

export default Country