import { useState } from 'react'


const Button = ({ handleClick, text }) => (
   <button onClick={handleClick}>
      {text}
   </button>
)

const StatisticLine = ({ text, value }) => {
   return (
      <p>{text} {value}</p>
   )
}


const Statistics = (props) => {
   const { good, neutral, bad } = props

   const total = good + neutral + bad

   const average = (((good*1) + (neutral*0) + (bad*-1))/total)

   const percent = (good/total) * 100

   if (props.hasFeedback === false) {
      return (
         <>
         <br />
         No feedback given
         </>
      )
   }
   else
   return(
      <>
      <StatisticLine text="Good"  value={good}/>
      <StatisticLine text="Neutral"  value={neutral}/>
      <StatisticLine text="Bad"  value={bad}/>
      <br />
      <StatisticLine text="Total"  value={total}/>
      <StatisticLine text="Average"  value={average}/>
      <StatisticLine text="Percentage"  value={`${percent} %`}/>

      </>
   )
}



const App = () => {
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)

   const [hasFeedback, setHasFeedback] = useState(false)
   

   const handleGoodClick = () => {
      const updateGood = good + 1
      setGood(updateGood)
      console.log('good value ',updateGood)
      setHasFeedback(true)
   }

   const handleNeutralClick = () => {
      const updateNeutral = neutral + 1
      setNeutral(updateNeutral)
      console.log('neutral value ',updateNeutral)
      setHasFeedback(true)
   }

   const handleBadClick = () => {
      const updateBad = bad + 1
      setBad(updateBad)
      console.log('bad value ',updateBad)
      setHasFeedback(true)
   }
   

   return (
      <div>
         <h1>Give feedback</h1>
         
         <Button handleClick={handleGoodClick}  text='Good' />
         <Button handleClick={handleNeutralClick} text='Neutral' />
         <Button handleClick={handleBadClick} text='Bad' />

         <br /><br />
         <h1>Statistics</h1>
         <Statistics good={good} neutral={neutral} bad={bad} hasFeedback={hasFeedback}/>
      </div>
   )
}


export default App