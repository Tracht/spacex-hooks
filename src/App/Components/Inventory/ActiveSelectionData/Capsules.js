import React from 'react';
import Button from '../../../StyledComponents/Button';
import { ModalOverlay, ModalContent, Modal, ModalHeader, ModalTitle, ModalText } from '../../../StyledComponents/Modal';

function Capsules(props) {
  const { activeSelection, keepOpenActiveSelection } = props
  if (!activeSelection) return null

  return(
   <ModalOverlay>
    <Modal>
      <ModalContent>
        <ModalHeader data-cy='item-name'>{activeSelection.capsule_serial}</ModalHeader>
        
        <ModalTitle green data-cy='background'> Background </ModalTitle> 
        { activeSelection.status ?  
          <ModalText> Stadtus: {activeSelection.status} </ModalText> 
          : <ModalText> Status: {activeSelection.status} </ModalText> 
        }
        { activeSelection.original_launch ?  
          <ModalText> Original launch: {activeSelection.original_launch} </ModalText> 
          : <ModalText> Original launch: Has not been launched </ModalText>
        }
        {/* Had to use ? instead of && because a value of '0' will not display "Re-use count" */}
        { activeSelection.reuse_count ?  
          <ModalText> Re-use count: {activeSelection.reuse_count} </ModalText> 
          : <ModalText> Re-use count: {activeSelection.reuse_count} </ModalText> 
        }
        { activeSelection.details ? 
          <ModalText> Details: {activeSelection.details} </ModalText> 
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

export default Capsules;