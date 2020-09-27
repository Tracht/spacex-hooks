import styled from 'styled-components';
import device from './device';

// https://stackoverflow.com/questions/56047659/multiple-props-options-for-styled-components

const handleLinkSize = size => {
  switch (size) {
    case "small":
      return 0.9; 
    case "large":
      return 1.3;
    default:
      return 1.1;
  }
};

export default styled.a`
  margin-bottom: 4em; 
  text-align: center;

  /* font-size: calc(10px + 2vmin); */

  font-size: ${({ size }) => handleLinkSize(size)}em;

  color: ${ props => props.green ? "#00cc99" : "white" };
  
  @media ${ device.mobileL | device.tablet} { 
    font-size: 1.5em;
  }

`;