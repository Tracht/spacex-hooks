import styled from 'styled-components';

// Create a Wrapper component that'll render an <a> href tag with some styles
export const CardLink = styled.a`
  font-size: 1.1em;
  color: white;
  /* Text align does not work for hrefs */
  /* text-align: left;  */
`;

// Create a Wrapper component that'll render a <p> tag with some styles
export const CardText = styled.p`
  font-size: 1em;
  text-align: ${ props => props.center ? "center" : "left" };
  color: white;
`;

// Create a Title component that'll render an <h1> tag with some styles
export const CardTitle = styled.h1`
  font-family: Helvetica, sans-serif;
  font-size: 1.5em;
  text-align: ${ props => props.center ? "center" : "left" };

  color: white;
`;

export const CardWrapper = styled.section`
  border-radius: 3px;
  padding: 1rem 1rem 1rem 1rem;
  margin: 1rem 1rem;
  margin: 4px 4px;
  width: auto;
  height: auto;

  flex: 1;
  flex-basis: 20%;
  
  background: ${ props => props.green ? "#00cc99" : "transparent" };
  color: ${ props => props.green ? "white" : "white" };
  border: 2px solid white;
`; 

export const CardsContainer = styled.div`
  width: flex;
  display: flex;
  flex-flow: row wrap;
  position: relative;
`