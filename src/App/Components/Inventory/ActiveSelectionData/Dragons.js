import React from 'react';
import Button from '../../../StyledComponents/Button';
import {ModalOverlay, ModalContent, Modal} from '../../../StyledComponents/Modal';

function Dragons(props) {
  const { activeSelection, keepOpenActiveSelection} = props
  if (!activeSelection) return null

  return(
    <ModalOverlay>
      <Modal>
        <ModalContent>
          <h1>{ activeSelection.name }</h1>
          
          { activeSelection.flickr_images && 
            activeSelection.flickr_images.map((photo) => {
              return (
                <div>
                  <img src={photo} alt="dragon" width="300" height="250"></img> 
                </div>
              )})
          }

          <h2>Background</h2>
          { activeSelection.active ? <p> Status: active </p> : <p> Status: not active </p> }
          { activeSelection.crew_capacity ? 
            <p> Crew capacity: 0 </p> : 
            <p> Crew capacity: {activeSelection.crew_capacity} </p> 
          }
          { activeSelection.dry_mass_kg && activeSelection.dry_mass_lb && 
            <p> Dry mass: {activeSelection.dry_mass_kg}kg / {activeSelection.dry_mass_lb}lbs </p> 
          }
          { activeSelection.orbit_duration_yr ? 
            <p> Duration in orbit: {activeSelection.orbit_duration_yr} years </p> 
            : <p> Duration in orbit: No information provided </p>
          }
          { activeSelection.first_flight ? <p> First flight: {activeSelection.first_flight} </p> 
            : <p> First flight: No information provided </p>
          }

          { activeSelection.heat_shield ? <h2>Heat Shield </h2> : null }
          { activeSelection.heat_shield.material ? 
            <p> Material: { activeSelection.heat_shield.material } </p> 
            : <p> Material: No information provided</p>
          }
          { activeSelection.heat_shield.size_meters ? 
            <p> Meters: { activeSelection.heat_shield.size_meters } </p> 
            : <p>Meters: No information provided</p>
          }
          { activeSelection.heat_shield.temp_degrees ? 
            <p> Max temperature: { activeSelection.heat_shield.temp_degrees } F </p> 
            : <p>Max temperature: No information provided</p>
          }
          { activeSelection.heat_shield.dev_partner ? 
            <p> Development Partner: { activeSelection.heat_shield.dev_partner } </p> 
            : <p>Development partner: No information provided</p>
          }
          
          { activeSelection.thrusters ? <h2> Thrusters </h2> : null }
          { activeSelection.thrusters ? 
            activeSelection.thrusters.map((item) => {
              return (
                <div key={item.type} >
                  <p> Type: {item.type}</p>
                  <p> Number of thrusters: {item.amount}</p>
                  <p> Pods: {item.pods}</p>
                  <p> Fuel type 1: {item.fuel_1}</p>
                  <p> Fuel type 2: {item.fuel_2}</p>
                </div>  
            )}) : <p> No thrusters </p>
          } 

          { activeSelection.wikipedia ? <h2>Learn more </h2> : null }
          { activeSelection.wikipedia && <a href={activeSelection.wikipedia} > Wikipedia </a> } 
          
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

export default Dragons;