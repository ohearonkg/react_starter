import * as React from 'react';

interface HelloProps {
  name: string,
  age: number
}

const Hello = (props: HelloProps) => {
  return (
    <div>
      <h1> Hello {props.name} </h1>
      <h2> Age {props.age} </h2>
    </div>
  )
}

export default Hello;