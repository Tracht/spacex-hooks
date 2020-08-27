import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
export default styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  &:hover{
    border: 2px solid palevioletred;
  }


`;

