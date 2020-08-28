import React from 'react';
// import PropTypes from 'prop-types';
import {
  Modal,
  ModalBackground,
  ModalContent,
  // ModalClose
} from './../StyledComponents/Modal';

const ModalCustom = ({ isActive, children, handleClose }) => {
  return (
    <Modal isActive={isActive}>
      <ModalBackground onClick={handleClose} />
      <ModalContent>
        {children}
      </ModalContent>
      {/* <ModalClose onClick={handleClose} /> */}
    </Modal>
  )
}

// ModalCustom.propTypes = {
//   children: PropTypes.element.isRequired,
//   isActive: PropTypes.bool.isRequired,
//   handleClose: PropTypes.func.isRequired
// }
export default ModalCustom