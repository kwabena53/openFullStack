import React from "react"
import Part from './Part'


const Content = ({parts}) => {

    
// const reducer = (acc, cur) => {
//     console.log("Cumm: ",cur.exercises , "Cur: ",cur.exercises)
//      sum +=  acc.exercises + cur.exercises
// };

const total = parts.reduce((s, p) => ({exercises: s.exercises + p.exercises}))
    
    return(
        <>
        {parts.map(part=> 
           <Part key={part.id} part={part}/>
            )}
        <p><b>{`total of ${total.exercises} exercises`}</b></p>
        </>
    )
}

export default Content