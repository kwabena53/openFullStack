import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) =>{
  return(
<button onClick={props.handler}>{props.text}</button>
  )
}

const Header = (props) => {
  return(
    <h3>{props.text}</h3>
    )
}

const NoFeedbackMessage = () => {
    return(<p>No feedback given</p>)
}

const Statistics = (props) => {
  if(props.total ===0){
  return(
      <NoFeedbackMessage/>
    )
  }
  return(
    <>
      <table>
        <tbody>
        <Statistic text="good" value={props.good}/>
        <Statistic text="neutral" value={props.neutral}/>
        <Statistic text="bad" value={props.bad}/>
        <Statistic text="all" value={props.total}/>
        <Statistic text="average" value={props.findAverage}/>
        <Statistic text="positive" value={props.positive}/>
        </tbody>
      </table>
    </> 
  )
}

const Statistic = (props) =>{
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const setToGood = () => setGood(good+1)
  
  const setToNeutral = () => setNeutral(neutral+1)
  
  const setToBad = () => setBad(bad+1)

  const total = () => bad + good + neutral

  const findAverage = () => ((good * 1) + (bad * -1))/total()
  
  const positive = () =>  (good / total()) * 100
  
  
  

  return (
    <div>
      <Header text="give feedback"/>
      <Button handler={setToGood} text="good"/>
      <Button handler={setToNeutral} text="neutral"/>
      <Button handler={setToBad} text="bad"/>
      <Header text="statistics"/>
      <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
        total = {total()}
        findAverage = {findAverage()}
        positive = {positive()}
        />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
