const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  const Header = props => {
    return <h1>{props.course}</h1>
  }

  const Content = props => {
    return <>
      <Part part={props.part1} exericses={props.exercises1} />
      <Part part={props.part2} exericses={props.exercise2} />
      <Part part={props.part3} exericses={props.exercise3} />

    </>
  }

  const Total = props => {
    return <p>Number of exercises {props.total}</p>
  }

  const Part = props => {
    return <p>{props.part} {props.exercises}</p>
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1.name} exercise1={part1.exercises}
        part2={part2.name} exercise2={part2.exercises}
        part3={part3.name} exercise3={part3.exercises}
      />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App