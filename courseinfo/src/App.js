const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  const Header = props => <h1>{props.course}</h1>

  const Content = props => {
    return <>
      <Part part={props.parts[0].name} exericses={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exericses={props.parts[1].exericses} />
      <Part part={props.parts[2].name} exericses={props.parts[2].exericses} />

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
        parts={parts}
      />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App