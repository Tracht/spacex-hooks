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
              <CardWrapper key={ item.id | item.capsule_id | item.core_serial | item.mission_name | item.ship_name } class="item">
                <CardTitle> 
                  { item.name } 
                  { item.rocket_name } 
                  { item.capsule_serial }
                  { item.core_serial }
                  { item.mission_name }
                  { item.ship_name }
                </CardTitle>
                <CardText> 
                  { item.description ? item.description.substring(0,200) : null } 
                  { item.details ? item.details.substring(0,200) : null } 
                </CardText>
                <CardLink href={ item.wikipedia | item.url }> 
                  { item.wikipedia | item.url ? `website` : null  } 
                </CardLink>
                <Button 
                  onClick={()=>{ setSelected(item.id); setModalState(true) }} 
                > 
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