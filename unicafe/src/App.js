import { useState } from 'react'

const Button = ({goodHandler, badHandler, neutralHandler}) => {
  return (
    <>
      <button onClick={goodHandler}>good</button>
      <button onClick={neutralHandler}>neutral</button>
      <button onClick={badHandler}>bad</button>

    </>
  )
}

const StatisticsLine = ({text, value}) => {
  return <tr><td>{text}</td><td>{value}</td></tr>
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = good/(good + bad + neutral);

  return (
  <table>
    <tbody>
      <StatisticsLine text='good' value={good} />
      <StatisticsLine text='neutral' value={neutral} />
      <StatisticsLine text='bad' value={bad} />
      <StatisticsLine text='all' value={all} />
      <StatisticsLine text='average' value={average} />
    </tbody>
  </table>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodHandler = () => {
    setGood(good + 1);
  }

  const neutralHandler = () => {
    setNeutral(neutral + 1);
  }

  const badHandler = () => {
    setBad(bad +1);
  }

  const statInfo = good || bad || neutral
    ? <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    : <p>No feedbacks given</p>

  return (
    <div>
      <h1>give feedback</h1>
      <Button 
        goodHandler={goodHandler}
        badHandler={badHandler}
        neutralHandler={neutralHandler}
      />
      <h1>Statistics</h1>
      {statInfo}
    </div>
  )
}

export default App