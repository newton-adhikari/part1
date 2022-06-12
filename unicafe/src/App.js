import { useState } from 'react'

const Statistics = props => {
  const all = props.good + props.neutral + props.bad;
  const average = props.good/(props.good + props.bad + props.neutral);

  return (
  <>
      <h1>Statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {all}</p>
      <p>average {average} %</p>

  </>
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

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodHandler}>good</button>
      <button onClick={neutralHandler}>neutral</button>
      <button onClick={badHandler}>bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App