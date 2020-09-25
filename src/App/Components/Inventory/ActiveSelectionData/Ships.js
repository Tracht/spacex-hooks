import React from 'react';
import Button from '../../../StyledComponents/Button';
import Modal from '../../../StyledComponents/Modal';

function Ships(props) {
  const { data, keepOpenActiveSelection } = props
  if (!data) return null

  return(
    <Modal>
      <h1>{ data.ship_name }</h1>
      <p>{ `Ship type: ` && data.ship_type }</p>
      <p>{ `Status: ` && data.active ? `Active` : `Not active` }</p>
      <p>{ `Year built: ` && data.year_built }</p>
      <p>{ `Home port: ` && data.home_port }</p>
      <p>{ `Roles: ` && data.roles.map((item) => {
        return (
            <p key={item} > {item}</p>
        )}) }
      </p>
      <p>{ `Successful landings: ` && data.successful_landings }</p>
      <p>{ `Attempted landings: ` && data.attempted_landings }</p>
      <a href={data.url} > { `Website: ` && data.url } </a>
      <img src={data.image} alt={data.ship_name} width="500" height="600"></img>

      <Button green onClick={keepOpenActiveSelection(false)} type="submit" >
        Close
      </Button>
    </Modal>
  )
}

export default Ships;