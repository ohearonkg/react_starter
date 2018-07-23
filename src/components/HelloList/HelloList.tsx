import * as React from 'react';
import Hello, { HelloProps } from '../Hello/Hello';
import styled from 'react-emotion';

interface HelloListProps {
  /**
   * A list of hello objects
   */
  hellos: Array<HelloProps>;
}

const HelloListWrapper = styled.div`
  padding: 10px;
`;

const HelloList = (props: HelloListProps) => {
  return (
    <HelloListWrapper>
      {props.hellos.map( (hello:HelloProps, index:number ) => 
        <Hello name={hello.name} age={hello.age} key={index}/>
      )}
    </HelloListWrapper>
  )
}

export default HelloList;