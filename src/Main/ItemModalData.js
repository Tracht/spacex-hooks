import React from 'react';
import {CardTitle, CardText} from './../StyledComponents/Card';

function ItemModalDetail(props) {
  const { data } = props
  if (!data) return null

  return(
    <div>
      <section> 
        <CardTitle> Basic Information </CardTitle>
        <CardText> { data.country ? `Country: ${data.country}` : null }  </CardText>
        <CardText> { data.company ? `Company: ${data.company}`: null }  </CardText>
        <CardText> { data.first_flight ? `First flight: ${data.first_flight}`: null }  </CardText>
        <CardText> { data.cost_per_launch ? `Cost per launch: ${data.cost_per_launch}`: null }  </CardText>
        <CardText> { data.success_rate ? `Success rate: ${data.success_rate}%`: null }  </CardText>
        <CardText> { data.active ? "Status: Active" : "Status: Not Active" }  </CardText>
        <CardText> { data.stages ? `Stages: ${data.stages}`: null }  </CardText>
        <CardText> { data.boosters ? `Boosters: ${data.boosters}`: null }  </CardText>

        <CardText> { data.crew_capacity ? `Crew capacity: ${data.crew_capacity}`: null }  </CardText>
        <CardText> { data.orbit_duration_yr ? `Orbit duration (years): ${data.orbit_duration_yr}`: null }  </CardText>
      </section>
      
      <section> 
        <CardTitle> { data.height ? `Dimensions` : null } </CardTitle>
        <CardText> { data.height ? `Height: ${data.height.meters}m / ${data.height.feet}ft` : null }  </CardText>
        <CardText> { data.diameter ? `Diameter: ${data.diameter.meters}m / ${data.diameter.feet}ft` : null }  </CardText>
        <CardText> { data.mass ? `Mass: ${data.mass.kg}kg / ${data.mass.lb}lb` : null }  </CardText>
      </section>

    </div>
  )
}

export default ItemModalDetail;