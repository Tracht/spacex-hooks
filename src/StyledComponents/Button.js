import styled from 'styled-components';

export default styled.button`
  /* display: inline-block; */
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 0.5rem;
  width: 9rem;
  background: ${props => props.green ? "#00cc99" : "transparent"}; 
  color: ${props => props.green ? "white" : "white"};
  border: ${props => props.green ? "2px solid #00cc99" : "2px solid white"};

  &:hover{
    border: ${props => props.green ? "2px solid #00cc99" : "2px solid white"};
    
  }

`;

