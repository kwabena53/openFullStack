import React from "react"

const Filter = ({newSearch, updateSearch}) =>{
  return(
        <div>
          filter shown with: <input value={newSearch} onChange={updateSearch}/>
        </div>)
}

export default Filter