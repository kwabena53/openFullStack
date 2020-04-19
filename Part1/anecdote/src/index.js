
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) =>{
  return(
    <button onClick={props.handler}>{props.text}</button>
  )
}



  const App = (props) => {
  const points = new Uint8Array(6)
  const [selected, setSelected] = useState(0)
  const [voteArray, setVote] = useState(points)

  const genRandom = () => {
    setSelected(Math.floor((Math.random() * 5) + 0))
  }

  const vote = () => {
    const copy = [...voteArray]
    copy[selected] += 1
    setVote(copy)
  }
  
  const getHighest = () => {
      const copy = [...voteArray]
      let max = 0
      let maxIndex = undefined
      for(let i =0; i<copy.length; i++){
        if(max < copy[i]){
            max = copy[i]
            maxIndex = i
        }
      }
      return maxIndex
  }
 

    
  return (
    <div>
      <h2>Anecdote of the Day</h2>
      {props.anecdotes[selected]} <br></br>

      <p>{`has  ${voteArray[selected]}  votes`}</p>  
      <Button handler={vote} text="vote"/>
      <Button handler={genRandom} text="next anecdotes"/>

      <h2>Anecdote with most votes</h2>
      {(getHighest() !== undefined)&&(
        <>
          {props.anecdotes[getHighest()]}
          <p>{`has  ${voteArray[getHighest()]}  votes`}</p> 
        </>
        )
      }
      {(getHighest() === undefined)&&(
        <>
          <p>No votes recorded yet</p> 
        </>
        )
      }
    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)