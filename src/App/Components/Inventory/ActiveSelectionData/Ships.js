import React from 'react';
import Button from '../../../StyledComponents/Button';
import Link from '../../../StyledComponents/Link';
import { ModalOverlay, ModalContent, Modal, ModalHeader, ModalTitle, ModalText, ModalImage } from '../../../StyledComponents/Modal';

function Ships(props) {
  const { activeSelection, keepOpenActiveSelection } = props
  if (!activeSelection) return null

  return(
    <ModalOverlay>
      <Modal>
        <ModalContent>
          <ModalHeader>{ activeSelection.ship_name }</ModalHeader>
          { activeSelection.image && 
            <ModalImage src={activeSelection.image} alt={activeSelection.ship_name} width="300" height="250"> 
            </ModalImage> 
          }  
          <ModalTitle green> Background </ModalTitle>
          { activeSelection.ship_type ? 
            <ModalText> Ship type: {activeSelection.ship_type} </ModalText> 
            : <ModalText>Ship type: No information provided</ModalText>
          } 
          { activeSelection.active ? 
            <ModalText> Active </ModalText> 
            : <ModalText> Not Active </ModalText>
          } 
          { activeSelection.year_built ? 
            <ModalText>Year built: {activeSelection.year_built} </ModalText> 
            : <ModalText>Year built: No information provided</ModalText>
          } 
          { activeSelection.home_port ? 
            <ModalText>Home port: {activeSelection.home_port} </ModalText> 
            : <ModalText>Home port: No information provided</ModalText>
          } 
          { activeSelection.successful_landings ? 
            <ModalText>Successful landings: {activeSelection.successful_landings} </ModalText> 
            : <ModalText>Sucessful landings: No information provided</ModalText>
          } 
          { activeSelection.attempted_landings ? 
            <ModalText>Attempted landings: {activeSelection.attempted_landings} </ModalText> 
            : <ModalText>Attempted landings: No information provided</ModalText>
          } 

          { activeSelection.roles ? <ModalTitle green> Roles </ModalTitle> : null }
          { activeSelection.roles ? 
            activeSelection.roles.map((item) => {
              return (
                <div>
                  <ModalText key={item}> {item} </ModalText>
                </div>
               )}) 
               : <ModalText> No role information available </ModalText>
          }

          { activeSelection.url ? <ModalTitle green>Learn more </ModalTitle> : null }
          { activeSelection.url && <Link href={activeSelection.url} > Website </Link> } 
          
          <br></br>
          <Button green onClick={keepOpenActiveSelection} type="submit" >
            Close
          </Button>
          <br></br>

        </ModalContent>
      </Modal>
    </ModalOverlay>
  )
}

export default Ships;