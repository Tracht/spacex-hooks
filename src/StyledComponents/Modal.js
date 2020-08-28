import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1050;
  display: flex;
  align-items: baseline; 
`;

export const ModalContent = styled.div`
  position: absolute; 
  left: 0;
  right: 0;
  width: ${props => props.width || "32%" };
  overflow: hidden; 
  padding: 16px; 
  margin: 50px auto;
  box-sizing: border-box; 
  z-index: 1;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  background: white; 
  border: 0.5px solid #E8E8E8;
`;

export const ModalTitle = styled.div`
  font-family: Helvetica, sans-serif;
  text-align: left;
  color: yellowgreen;
`;

export const ModalBackground = styled.div`
  width: 100vw; 
  height: 100vw; 
  z-index: 0;
  background: rgba(0, 0, 0, 0.5);
`;