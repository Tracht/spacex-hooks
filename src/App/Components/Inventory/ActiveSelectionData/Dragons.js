import React from 'react';
import Button from '../../../StyledComponents/Button';
import Link from '../../../StyledComponents/Link';
import { ModalOverlay, ModalContent, Modal, ModalTitle, ModalImage } from '../../../StyledComponents/Modal';

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
                      <ModalImage src={photo} alt="dragon" width="300" height="250"></ModalImage> 
                  )})
              }

          <ModalTitle green center> Background </ModalTitle>
          { activeSelection.active ? <p> Active </p> : <p> Not Active </p> }
          { activeSelection.crew_capacity ? 
            <p> Crew capacity: {activeSelection.crew_capacity} </p> 
            : <p> Crew capacity: 0 </p> 
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

          { activeSelection.heat_shield ? <ModalTitle green center> Heat Shield </ModalTitle> : null }
          { activeSelection.heat_shield.material ? 
            <p> Material: { activeSelection.heat_shield.material } </p> 
            : <p> Material: No information provided</p>
          }
          { activeSelection.heat_shield.size_meters ? 
            <p> Size: { activeSelection.heat_shield.size_meters } meters </p> 
            : <p> Size: No information provided</p>
          }
          { activeSelection.heat_shield.temp_degrees ? 
            <p> Max temperature: { activeSelection.heat_shield.temp_degrees } C </p> 
            : <p>Max temperature: No information provided</p>
          }
          { activeSelection.heat_shield.dev_partner ? 
            <p> Development Partner: { activeSelection.heat_shield.dev_partner } </p> 
            : <p>Development partner: No information provided</p>
          }
          
          { activeSelection.thrusters ? <ModalTitle green center> Thrusters </ModalTitle> : null }
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

          { activeSelection.wikipedia ? <ModalTitle green center> Learn more </ModalTitle> : null }
          { activeSelection.wikipedia && <Link href={activeSelection.wikipedia} > Wikipedia </Link> } 
          
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