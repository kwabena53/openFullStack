import React from "react"
import Contact from "./Contact"


const Contacts = ({persons}) => {
    return (persons.map((person, i)=>
        <Contact key={i} person={person}/> 
      ))
}

export default Contacts