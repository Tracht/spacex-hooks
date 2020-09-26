import styled from 'styled-components';
// https://css-tricks.com/considerations-styling-modal/

// This is what covers the entire screen
export const ModalOverlay = styled.div`
  z-index: 1000;
  background:  #282c34; 
  opacity: 0.96; 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Modal = styled.div`
  position: fixed; 
  border: 2px white solid; 
  /* position: absolute;  */
  z-index: 1010;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* new */
  /* background: rgba(0, 0, 0, 1); */
  background: #282c34; 
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  height: 400px;
  max-height: 100%;
  max-width: 100%;
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
`