import React, { useState } from 'react'
import Filter from "./components/Filter"
import PersonFrom from "./components/PersonFrom"
import Contacts from "./components/Contacts"


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  const updateInput = (event) => {
    setNewName(event.target.value)
  }
  const updatePhone = (event) => {
    setNewPhone(event.target.value)

  }

  const updateSearch = (event) => {
    setNewSearch(event.target.value)
  }

  const addContact = (event) =>{
    event.preventDefault()
    if(!isDuplicate()){
        // setPersons(persons.concat({name: newName}))
        setPersons([...persons, {name: newName, number: newPhone}])
    }
    setNewName('')
    setNewPhone('')
  }

 
  const isDuplicate = () =>{
     const con = persons.filter((person)=>{
          return person.name === newName
      })
      if(con.length !== 0){ //This shows that contact exists in phone book
          raiseAlert(newName)
          return true
      }else{
          return false
      }
  }
  const raiseAlert = (contact) =>{
    window.alert(`${contact} already added to phonebook`);
  }

  const showSearch = newSearch === "" ? persons : persons.filter((person) =>
    // console.log(person.name)
    person.name.toLowerCase().includes(newSearch.toLowerCase())
)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} updateSearch={updateSearch}/>
      <h3>Add a new</h3>
      <PersonFrom 
      newName = {newName} 
      updateInput = {updateInput} 
      newPhone = {newPhone} 
      updatePhone = {updatePhone}
      addContact = {addContact}
      />
      <h3>Numbers</h3>
      <Contacts persons = {showSearch}/>
    </div>
  )
}

export default App