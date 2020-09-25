import React from 'react';
import Button from '../../../StyledComponents/Button';
import Modal from '../../../StyledComponents/Modal';

function Missions(props) {
  const { data, keepOpenActiveSelection } = props
  if (!data) return null

  return(
    <Modal>
      <h1>{ data.mission_name }</h1>
      <p>{ data.description }</p>
      <p>{ `Manufacturers: ` && data.manufacturers.map((item) => {
        return (
            <p key={item} >{item}</p>
        )}) }
      </p>
      <p>{ `Payloads: ` && data.payload_ids.map((item) => {
        return (
            <p key={item} > {item}</p>
        )}) }
      </p>
      <a href={data.wikipedia} > { `Wikipedia` && data.wikipedia } </a>
      <a href={data.website} > { `Website` && data.website } </a>
      <a href={data.twitter} > { `Twitter` && data.twitter } </a>

      <Button green onClick={keepOpenActiveSelection(false)} type="submit" >
        Close
      </Button>
    </Modal>
  )
}

export default Missions;