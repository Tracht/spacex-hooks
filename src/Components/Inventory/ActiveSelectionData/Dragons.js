import React from 'react';
import Button from '../../StyledComponents/Button';
import { Link } from '../../StyledComponents/Link';
import { ModalOverlay, ModalContent, Modal, ModalHeader, ModalTitle, ModalText, ModalImage } from '../../StyledComponents/Modal';

function Dragons(props) {
  const { activeSelection, keepOpenActiveSelection} = props
  if (!activeSelection) return null

  return(
    <ModalOverlay>
      <Modal>
        <ModalContent>
          <ModalHeader data-cy='item-name'>{ activeSelection.name }</ModalHeader>
          
              { activeSelection.flickr_images && 
                activeSelection.flickr_images.map((photo) => {
                  return (
                      <ModalImage src={photo} alt="dragon" width="300" height="250"></ModalImage> 
                  )})
              }

          <ModalTitle green> Background </ModalTitle>
          { activeSelection.active ? <ModalText> Active </ModalText> : <ModalText> Not Active </ModalText> }
          { activeSelection.crew_capacity ? 
            <ModalText> Crew capacity: {activeSelection.crew_capacity} </ModalText> 
            : <ModalText> Crew capacity: 0 </ModalText> 
          }
          { activeSelection.dry_mass_kg && activeSelection.dry_mass_lb && 
            <ModalText> Dry mass: {activeSelection.dry_mass_kg}kg / {activeSelection.dry_mass_lb}lbs </ModalText> 
          }
          { activeSelection.orbit_duration_yr ? 
            <ModalText> Duration in orbit: {activeSelection.orbit_duration_yr} years </ModalText> 
            : <ModalText> Duration in orbit: No information provided </ModalText>
          }
          { activeSelection.first_flight ? <ModalText> First flight: {activeSelection.first_flight} </ModalText> 
            : <ModalText> First flight: No information provided </ModalText>
          }

          { activeSelection.heat_shield ? <ModalTitle green> Heat Shield </ModalTitle> : null }
          { activeSelection.heat_shield.material ? 
            <ModalText> Material: { activeSelection.heat_shield.material } </ModalText> 
            : <ModalText> Material: No information provided</ModalText>
          }
          { activeSelection.heat_shield.size_meters ? 
            <ModalText> Size: { activeSelection.heat_shield.size_meters } meters </ModalText> 
            : <ModalText> Size: No information provided</ModalText>
          }
          { activeSelection.heat_shield.temp_degrees ? 
            <ModalText> Max temperature: { activeSelection.heat_shield.temp_degrees } C </ModalText> 
            : <ModalText>Max temperature: No information provided</ModalText>
          }
          { activeSelection.heat_shield.dev_partner ? 
            <ModalText> Development Partner: { activeSelection.heat_shield.dev_partner } </ModalText> 
            : <ModalText>Development partner: No information provided</ModalText>
          }
          
          { activeSelection.thrusters ? <ModalTitle green> Thrusters </ModalTitle> : null }
          { activeSelection.thrusters ? 
            activeSelection.thrusters.map((item) => {
              return (
                <div key={item.type} >
                  <ModalText> Type: {item.type}</ModalText>
                  <ModalText> Number of thrusters: {item.amount}</ModalText>
                  <ModalText> Pods: {item.pods}</ModalText>
                  <ModalText> Fuel type 1: {item.fuel_1}</ModalText>
                  <ModalText> Fuel type 2: {item.fuel_2}</ModalText>
                </div>  
            )}) : <ModalText> No thrusters </ModalText>
          } 

          { activeSelection.wikipedia ? <ModalTitle green center> Learn more </ModalTitle> : null }
          { activeSelection.wikipedia && <Link href={activeSelection.wikipedia} > Wikipedia </Link> } 
          
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

export default Dragons;