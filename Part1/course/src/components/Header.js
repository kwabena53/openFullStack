import React from "react"

const Header = ({text, type}) => {
    if (type ===3){
        return(
            <h3>{text}</h3>
        )
    } else if (type ===2){
        return(
            <h2>{text}</h2>
        )
    }
}

export default Header