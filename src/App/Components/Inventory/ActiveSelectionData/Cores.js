import React from 'react';
import Button from '../../../StyledComponents/Button';
import { ModalOverlay, ModalContent, Modal, ModalHeader, ModalTitle, ModalText } from '../../../StyledComponents/Modal';

function Cores(props) {
  const { activeSelection, keepOpenActiveSelection } = props
  if (!activeSelection) return null

  return(
    <ModalOverlay>
      <Modal>
        <ModalContent>
          <ModalHeader data-cy='item-name'>{activeSelection.core_serial}</ModalHeader>
          
          <ModalTitle green data-cy='background'> Background </ModalTitle>
          { activeSelection.status ? 
            <ModalText> Status: {activeSelection.status } </ModalText> 
            : <ModalText> Status: {activeSelection.status } </ModalText> 
          }
          { activeSelection.original_launch ? 
            <ModalText data-cy='launch-true'> Original launch: {activeSelection.original_launch } </ModalText> 
            : <ModalText data-cy='launch-false'>Original launch: Has not been launched.</ModalText>
          }
          { activeSelection.reuse_count ? 
            <ModalText> Re-use count: {activeSelection.reuse_count } </ModalText> 
            : <ModalText> Re-use count: {activeSelection.reuse_count } </ModalText>
          }
          { activeSelection.water_landing ? 
            <ModalText> Water landings: true </ModalText> 
            : <ModalText> Water landings: false </ModalText> 
          }
          { activeSelection.details ? 
            <ModalText> Details: {activeSelection.details } </ModalText> 
            : <ModalText>Details: No details provided.</ModalText>
          }

          { activeSelection.missions ? <ModalTitle green> Missions </ModalTitle> : null }
          { activeSelection.missions[0] ? 
            activeSelection.missions.map((item) => {
              return (
                <div key={item.name} >
                  <ModalText>Name: {item.name}</ModalText>
                  <ModalText>Flight: {item.flight}</ModalText>
                </div>  
              )}) 
              : <ModalText>No missions</ModalText>
          }
          <br></br>
          <Button green onClick={keepOpenActiveSelection} type="submit" data-cy='close-modal'>
            Close
          </Button>
          <br></br>
        </ModalContent>
      </Modal>
    </ModalOverlay>
  )
}

export default Cores;