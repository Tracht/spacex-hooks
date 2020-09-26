import React from 'react';
import Button from '../../../StyledComponents/Button';
import {ModalOverlay, ModalContent, Modal } from '../../../StyledComponents/Modal';

function Ships(props) {
  const { activeSelection, keepOpenActiveSelection } = props
  if (!activeSelection) return null

  return(
    <ModalOverlay>
      <Modal>
        <ModalContent>
          <h1>{ activeSelection.ship_name }</h1>
          { activeSelection.image && <img src={activeSelection.image} alt={activeSelection.ship_name} width="300" height="250"></img> }  

          <h2>Background</h2>
          { activeSelection.ship_type ? 
            <p>Ship type: {activeSelection.ship_type} </p> 
            : <p>Ship type: No information provided</p>
          } 
          { activeSelection.active ? 
            <p> Active: {activeSelection.active} </p> 
            : <p> Active: {activeSelection.active} </p>
          } 
          { activeSelection.year_built ? 
            <p>Ship type: {activeSelection.year_built} </p> 
            : <p>Year built: No information provided</p>
          } 
          { activeSelection.home_port ? 
            <p>Ship type: {activeSelection.home_port} </p> 
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

          { activeSelection.roles ? <h2>Roles </h2> : null }
          { activeSelection.roles ? 
            activeSelection.roles.map((item) => {
              return (
                <div>
                  <p key={item} > {item}</p>
                </div>
               )}) 
               : <p> No role information available </p>
          }

          { activeSelection.url ? <h2>Learn more </h2> : null }
          { activeSelection.url && <a href={activeSelection.url} > Website </a> } 
          
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