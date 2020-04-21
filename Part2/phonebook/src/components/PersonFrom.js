import React from "react"

const PersonFrom = ({newName, updateInput, newPhone, updatePhone, addContact}) => {
    return(
        <form>
        <div>
          name: <input value =  {newName} onChange={updateInput}/>
        </div>
        <div>
            number: <input value = {newPhone} onChange={updatePhone}/>
        </div>
        <div>
          <button onClick={addContact} type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonFrom