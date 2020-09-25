import React from 'react';
// import { CardTitle, CardText } from '../../StyledComponents/Card';

function Missions(props) {
  const { data } = props
  if (!data) return null

  return(
    <div>
      <h1>{ data.mission_name }</h1>
      <p>{ data.description }</p>
      <p>{`Manufacturers: ` && data.manufacturers.map((item) => {
        return (
            <p key={item} >{item}</p>
        )}) }
      </p>
      <p>{`Payloads: ` && data.payload_ids.map((item) => {
        return (
            <p key={item} > {item}</p>
        )}) }
      </p>
      <a href={data.wikipedia} > { `Wikipedia` && data.wikipedia } </a>
      <a href={data.website} > { `Website` && data.website } </a>
      <a href={data.twitter} > { `Twitter` && data.twitter } </a>
    </div>
  )
}

export default Missions;