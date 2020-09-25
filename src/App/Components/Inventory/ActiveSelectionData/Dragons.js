import React from 'react';
import Button from '../../../StyledComponents/Button';
import Modal from '../../../StyledComponents/Modal';

function Dragons(props) {
  const { data, keepOpenActiveSelection} = props
  if (!data) return null

  return(
    <Modal>
      <h1>{ data.name }</h1>

      <p>{ `Status: ` && data.active ? `Active` : `Not active` }</p>
      <p>{ `Crew capacity: ` && data.crew_capacity }</p>
      <p>{ `Duration in orbit: ` && data.orbit_duration_yr }</p>
      <p>{ `First flight: ` && data.first_flight }</p>
      <p>{ data.description }</p>
      <a href={data.wikipedia} > Wikipedia </a>

      <p>{ `Dry mass:` && data.dry_mass_kg `kg ` && data.dry_mass_lb `lbs` }</p>
      <p>{ `Heat sheild` }</p>
      <p>{ `Material: ` && data.heat_shield.material }</p>
      <p>{ `Meters: ` && data.heat_shield.size_meters }</p>
      <p>{ `Max temperature: ` && data.heat_shield.temp_degrees `C`}</p>
      <p>{ `Development partner: ` && data.heat_shield.dev_partner }</p>

      <p>{ `Thrusters: ` && data.thrusters.map((item) => {
        return (
          <div key={item.type} >
            <p>{`Type: ` && item.type}</p>
            <p>{`Amount: ` && item.amount}</p>
            <p>{`Pods: ` && item.pods}</p>
            <p>{`Fuel type 1: ` && item.fuel_1}</p>
            <p>{`Fuel type 2: ` && item.fuel_2}</p>
          </div>  
        )}) }
      </p>

      <div>
        {data.flickr_images.map((photo) => {
           return <img src={photo} alt="dragon" width="500" height="600"></img>
        })}
      </div>
      
      <Button green onClick={keepOpenActiveSelection(false)} type="submit" >
        Close
      </Button>
    </Modal>
  )
}

export default Dragons;