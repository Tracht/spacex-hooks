import React from 'react';
import Button from '../../../StyledComponents/Button';
import {ModalOverlay, ModalContent, Modal} from '../../../StyledComponents/Modal';

function Cores(props) {
  const { activeSelection, keepOpenActiveSelection } = props
  if (!activeSelection) return null

  return(
    <ModalOverlay>
      <Modal>
        <ModalContent>
          <h1>{activeSelection.core_serial}</h1>
          
          <h2>Background</h2>
          { activeSelection.status && <p> Status: {activeSelection.status } </p> }
          { activeSelection.original_launch ? 
            <p> Original launch: {activeSelection.original_launch } </p> 
            : <p>Original launch: Has not been launched.</p>
          }
          { activeSelection.reuse_count ? 
            <p> Re-use count: {activeSelection.reuse_count } </p> : 
            <p> Re-use count: {activeSelection.reuse_count } </p>
          }
          { activeSelection.water_landing ? 
            <p> Water landings: {activeSelection.water_landing } </p> :
            <p> Water landings: {activeSelection.water_landing } </p> 
          }
          { activeSelection.details ? 
            <p> Details: {activeSelection.details } </p> 
            : <p>Details: No details provided.</p>
          }

          { activeSelection.missions ? <h2>Missions</h2> : null }
          { activeSelection.missions[0] ? 
            activeSelection.missions.map((item) => {
              return (
                <div key={item.name} >
                  <p>Name: {item.name}</p>
                  <p>Flight: {item.flight}</p>
                </div>  
              )}) : 
              <p>No missions</p>
          }
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

export default Cores;