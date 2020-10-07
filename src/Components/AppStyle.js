import styled from "styled-components";
import device from "../Style/deviceSize";

export default styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-family: "PT Sans Narrow", sans-serif;
  background-color: #282c34;

  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;
