import * as React from 'react';
import styled from 'react-emotion';
import Hello, { HelloProps } from '../Hello/Hello';

interface IHelloList {
  /**
   * A list of hello objects
   */
  hellos:           HelloProps[];
}

const HelloListWrapper = styled.div`
  padding: 10px;
`;

const HelloList = (props: IHelloList) => {
  return (
    <HelloListWrapper>
    {props.hellos.map( (hello:HelloProps, index:number ) => 
        <Hello name={hello.name} age={hello.age} key={index}/>
      )}
    </HelloListWrapper>
  )
}

export default HelloList;