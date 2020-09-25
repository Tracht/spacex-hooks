import React from 'react';
import Button from '../../../StyledComponents/Button';
import Modal from '../../../StyledComponents/Modal';

function Capsules(props) {
  const { data, keepOpenActiveSelection } = props
  if (!data) return null

  return(
    <Modal>
      <h1>{data.capsule_serial}</h1>
      <p>{`Status: ` && data.status } </p>
      <p>{`Original launch: ` && data.original_launch }</p>
      <p>{`Landings: ` && data.landings }</p>
      <p>{`Re-use count: ` && data.reuse_count }</p>
      <p>{`Details: ` && data.details }</p>
      <p>{`Missions: ` && data.missions.map((item) => {
        return (
            <div key={data.missions.name} >
            <p>{`Name: ` && data.missions.name}</p>
            <p>{`Flight: ` && data.missions.flight}</p>
          </div>  
        )}) }
      </p>
      <Button green onClick={keepOpenActiveSelection(false)} type="submit" >
        Close
      </Button>
    </Modal>
  )
}

export default Capsules;