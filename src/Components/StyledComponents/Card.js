import styled from 'styled-components';
import device from '../../Style/device';
// https://lukebrown.io/post/how-to-create-a-spacing-system-with-styled-components/
 
export const CardLink = styled.a`
  font-size: 1.1em;
  color: "#00cc99";
  /* Text align does not work for hrefs */
  /* text-align: left;  */
`;

export const CardText = styled.p`
  font-size: 0.9em;
  text-align: ${ props => props.center ? "center" : "left" };
  color: lightgrey;
  font-family: 'Open Sans', sans-serif;
`;

export const CardTitle = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.3em;
  text-align: ${ props => props.center ? "center" : "left" };
  color: white;
`;

export const CardContentWrapper = styled.div`
  padding: 0.5rem;
  margin-top: 0.5rem;
  p {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`
export const CardWrapper = styled.section`
  background: ${ props => props.green ? "#00cc99" : "transparent" };
  color: white;
  border: 2px solid white; 
  border-radius: 3px;
  /* padding: 1rem 1rem 1rem 1rem; */
  padding: 0.75rem;
  
  margin: 1rem 1rem;
  margin: 4px 4px;
  width: auto;
  height: auto;
  
  flex: 1;
  flex-basis: 20%;
`; 

export const CardsContainer = styled.div`
  /* width: flex;
  display: flex;
  flex-flow: row wrap;
  position: relative; */

  @media ${device.laptopL | device.desktop } {
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.75rem;
    padding: 1.5rem;
  }

  @media ${device.laptop } {
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-gap: 0.75rem;
    padding: 1.5rem;
  }

  @media ${ device.mobileL | device.tablet} { 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-gap: 0.75rem;
    padding: 1.5rem;
  }

  @media ${ device.mobileM | device.mobileS } {
    display: grid; 
    grid-template-columns: 1fr; 
    grid-gap: 0.75rem;
    padding: 1.5rem;
  }

`