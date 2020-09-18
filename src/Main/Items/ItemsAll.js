import React from 'react';
import { CardWrapper, CardTitle, CardText, CardLink, CardsContainer } from '../../StyledComponents/Card';
import Button from '../../StyledComponents/Button';

function ItemsAll(props) {

  const { data, isError, setSelected, setModalState } = props
  return(
    <div>
      { isError && <p> Error fetching content </p> } 
      { data ? null : (<div> Data Loading </div>) }
      { data && 
        <CardsContainer>
            {data.map(item => (
              <CardWrapper key={item.id} class="item">
                <CardTitle> { item.name } { item.rocket_name } </CardTitle>
                <CardText> { item.description ? item.description : null } </CardText>
                <CardLink href={ item.wikipedia }> Wiki </CardLink>
                <Button onClick={()=>{ setSelected(item.id); setModalState(true) }}> 
                  Learn more 
                </Button>
              </CardWrapper>
              ))
            }
       </CardsContainer>
      }
    </div>
  );
};

export default ItemsAll;