import styled from 'styled-components';

// Create a Wrapper component that'll render an <a> href tag with some styles
export const CardLink = styled.a`
  font-size: 1.1em;
  color: white;
`;

// Create a Wrapper component that'll render a <p> tag with some styles
export const CardText = styled.p`
  font-size: 1.1em;
  text-align: left;
  color: white;
`;

// Create a Title component that'll render an <h1> tag with some styles
export const CardTitle = styled.h1`
  font-family: Helvetica, sans-serif;
  font-size: 1.5em;
  text-align: left;
  color: white;
`;

export const CardWrapper = styled.section`
  border-radius: 3px;
  padding: 1rem 0.3rem 2rem 1.5rem;
  margin: 1rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`; 