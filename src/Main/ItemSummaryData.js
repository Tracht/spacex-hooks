import React from 'react';
import { CardWrapper, CardTitle, CardText, CardLink } from './StyledComponents/Card';
import Button from './StyledComponents/Button';

function ItemSummaryData(props) {

  const { data, setSelected, setModalState } = props

  return(
    <div>
      <CardWrapper key={data.id}>
        
        <CardTitle> { data.name } { data.rocket_name } </CardTitle>
        <CardText> { data.description ? data.description : null } </CardText>
        <CardLink href={ data.wikipedia }> Wiki </CardLink>

        <Button onClick={()=>{ setSelected(data.id); setModalState(true) }}> 
          Learn more 
        </Button>

      </CardWrapper>
    </div>
  );
  
};

export default ItemSummaryData;