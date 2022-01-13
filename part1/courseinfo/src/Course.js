import React from 'react';


const Header = (props) => {
    return <h1>{props.course}</h1>
}

const Part = (props) => {

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

const Course = ({course}) => {

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts}  />
            <Total parts={course.parts} />
        </div>
    );
}

export default Course;