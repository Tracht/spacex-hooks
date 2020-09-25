import styled from 'styled-components';
import device from './StyledComponents/deviceSize';

export default styled.div`
  /* min-height: 10vh;
  display: flex;
  flex-direction: column; */
  text-align: center;
  font-family: 'PT Sans Narrow', sans-serif;
  background-color: #282c34;

  @media ${device.laptop} { 
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }

`