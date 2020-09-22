import styled from 'styled-components';

export default styled.button`
  /* display: inline-block; */
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 0.5rem;
  width: 9rem;
  background: ${props => props.pink ? "palevioletred" : "transparent"};
  color: ${props => props.pink ? "white" : "white"};
  border: ${props => props.pink ? "2px solid palevioletred" : "2px solid white"};

  &:hover{
    border: ${props => props.pink ? "2px solid palevioletred" : "2px solid white"};
    
  }

`;

