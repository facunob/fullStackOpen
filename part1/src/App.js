import React from 'react';


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
  ]


  const Header = (props) => {
    return <h1>{props.course}</h1>
  }

  const Part = (props) => {

    console.log(props);
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    );
  }

  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part => <Part part={part.name} exercises={part.exercises} />)}
      </div>
    );
  }

  const Total = (props) => {
    const totalExcersices = props.parts.reduce((total, currentValue) => total + currentValue.exercises, 0);

    return (
        <p>Number of exercises {totalExcersices}</p>
    );
  }


  return (
    <div>
      <Header course={course} />
      <Content parts={parts}  />
      <Total parts={parts} />
  </div>
  );
}

export default App;
