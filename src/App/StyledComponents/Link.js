import styled from 'styled-components';
import device from './device';

export default styled.a`
  margin-bottom: 4em; 
  font-size: 1.1em;
  /* text-decoration: underline; */
  color: ${ props => props.green ? "#00cc99" : "white" };
  text-align: center;

  @media ${ device.mobileL | device.tablet} { 
    font-size: 1.5em;
  }

`;