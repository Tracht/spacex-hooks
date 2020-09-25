import React from 'react';
import { CardWrapper, CardTitle, CardText, CardsContainer, CardContentWrapper } from '../../StyledComponents/Card';
import Button from '../../StyledComponents/Button';
import Link from '../../StyledComponents/Link';

function ItemsAll(props) {

  const { data, isError, setSelected, setModalState } = props
  return(
    <div>
      { isError && <p> Error fetching content </p> } 
      { data ? null : (<div> Data Loading... </div>) }
      { data && 
        <CardsContainer>
            {data.map(item => (
                <CardWrapper key={ item.id | item.capsule_serial | item.core_serial | item.mission_id | item.ship_id }>
               
                <CardTitle> 
                  { item.name } 
                  { item.capsule_serial }
                  { item.core_serial }
                  { item.mission_name }
                  { item.ship_name }
                </CardTitle>

               <CardContentWrapper>
                <CardText> 
                    { item.description ? item.description.substring(0,200) + `...` : null } 
                    { item.details ? item.details.substring(0,200) + `...` : null } 
                </CardText>
               </CardContentWrapper>

                 <Button 
                    onClick={ ()=>{ setSelected(  item.id | item.capsule_id | item.core_serial | item.mission_name | item.ship_name ); setModalState(true) }} 
                  > 
                    Learn more 
                  </Button>

                  <Link>
                  
                  </Link>
              </CardWrapper>
              ))
            }
       </CardsContainer>
      }
    </div>
  );
};

export default ItemsAll;