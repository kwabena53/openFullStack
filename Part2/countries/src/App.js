import React, {useState, useEffect} from 'react';
import axios from "axios"
import DisplayResult from "./components/DisplayResult"

import './App.css';

function App() {
  const [newSearch, setSearch ]= useState('')
  const [countries, setCountries] = useState([])

const updateSearch = (event) =>{
  setSearch(event.target.value)
}

const hook = () =>{
    axios.get("https://restcountries.eu/rest/v2/all")
    .then((response) =>{
      setCountries(response.data)
    })
}
useEffect(hook, [])

// const searchCountry = () => {
//   countries.filter((country)=>(
//     country.name.toLowerCase().includes(newSearch.toLocaleLowerCase())
//   ))
// }

const countryResults = newSearch === ""? [] : countries.filter((country)=>(
  country.name.toLowerCase().includes(newSearch.toLocaleLowerCase())
))

  return (
    <div>
      <form>
        country: <input value={newSearch} onChange={updateSearch}/>
      </form>
      <DisplayResult countries = {countryResults}/>
    </div>
  );
}

export default App;
