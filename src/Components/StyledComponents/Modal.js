import styled from "styled-components";
// https://css-tricks.com/considerations-styling-modal/

// This is what covers the entire screen
export const ModalOverlay = styled.div`
  z-index: 1000;
  background: #282c34;
  opacity: 0.96;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const Modal = styled.div`
  position: fixed;
  border: 2px white solid;
  z-index: 1010;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #282c34;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  height: 350px;
  max-height: 100%;
  max-width: 100%;
`;

export const ModalHeader = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 1.3em;
  text-align: ${props => props.left ? "left" : "center"};
  color: ${props => props.green ? "#00cc99" : "white"};
`;

export const ModalTitle = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 1.1em;
  text-align: ${props => props.left ? "left" : "center"};
  color: ${props => props.green ? "#00cc99" : "white"};
`;

export const ModalText = styled.p`
  font-size: 0.9em;
  text-align: ${props => props.left ? "left" : "center"};
  color: white;
  font-family: "Open Sans", sans-serif;
`;

export const ModalImage = styled.img`
  width: 50%;
  height: 200px;
  padding: 10px;
`;

export const ModalContent = styled.div`
  position: absolute;
  border: 2px white solid;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  padding: 20px 50px 20px 20px;
  overflow: scroll;
`;
