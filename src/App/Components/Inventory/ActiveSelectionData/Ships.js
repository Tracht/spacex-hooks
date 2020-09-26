import React from 'react';
import Button from '../../../StyledComponents/Button';
import Link from '../../../StyledComponents/Link';
import { ModalOverlay, ModalContent, Modal, ModalTitle, ModalImage } from '../../../StyledComponents/Modal';

function Ships(props) {
  const { activeSelection, keepOpenActiveSelection } = props
  if (!activeSelection) return null

  return(
    <ModalOverlay>
      <Modal>
        <ModalContent>
          <h1>{ activeSelection.ship_name }</h1>
          { activeSelection.image && 
            <ModalImage src={activeSelection.image} alt={activeSelection.ship_name} width="300" height="250"> 
            </ModalImage> 
          }  
          <ModalTitle green center> Background </ModalTitle>
          { activeSelection.ship_type ? 
            <p> Ship type: {activeSelection.ship_type} </p> 
            : <p>Ship type: No information provided</p>
          } 
          { activeSelection.active ? 
            <p> Active </p> 
            : <p> Not Active </p>
          } 
          { activeSelection.year_built ? 
            <p>Year built: {activeSelection.year_built} </p> 
            : <p>Year built: No information provided</p>
          } 
          { activeSelection.home_port ? 
            <p>Home port: {activeSelection.home_port} </p> 
            : <p>Home port: No information provided</p>
          } 
          { activeSelection.successful_landings ? 
            <p>Successful landings: {activeSelection.successful_landings} </p> 
            : <p>Sucessful landings: No information provided</p>
          } 
          { activeSelection.attempted_landings ? 
            <p>Attempted landings: {activeSelection.attempted_landings} </p> 
            : <p>Attempted landings: No information provided</p>
          } 

          { activeSelection.roles ? <ModalTitle green center> Roles </ModalTitle> : null }
          { activeSelection.roles ? 
            activeSelection.roles.map((item) => {
              return (
                <div>
                  <p key={item} > {item}</p>
                </div>
               )}) 
               : <p> No role information available </p>
          }

          { activeSelection.url ? <ModalTitle green center>Learn more </ModalTitle> : null }
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