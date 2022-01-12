import { React, useState } from 'react'



const Statistics = (props) => {
  const total = props.good + props.bad + props.neutral
  
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="all" value={total} />
        {total !== 0 && <StatisticLine text="positive" value={`${(props.good / total) * 100}%`} />}
        {total !== 0 && <StatisticLine text="average" value={(props.good - props.bad) / total} />}
      </tbody>
    </table>
  );
}

const StatisticLine = (props) => {
  return (
      <tr>
        <td>{props.text}:</td>
        
        <td>{props.value}</td>
      </tr>
    )
}


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <button onClick={() => setGood(good + 1)} >Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </div>

      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  );
}

export default App;
