import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalBackground,
  ModalContent,
  ModalClose
} from './StyledComponents/Modal';

const CustomModal = ({ isActive, children, handleClose }) => {
  return (
    <Modal isActive={isActive}>
      <ModalBackground onClick={handleClose} />
      <ModalContent>
        {children}
      </ModalContent>
      <ModalClose onClick={handleClose} />
    </Modal>
  )
}

CustomModal.propTypes = {
  children: PropTypes.element.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}
export default CustomModal