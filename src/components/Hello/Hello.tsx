import * as React from 'react';

interface HelloProps {
  /**
   * The name of person
   * to be printed
   */
  name: string;

  /**
   * The age of the person 
   * to be printed
   */
  age: number;
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