import React from 'react';
import { CardWrapper, CardTitle, CardText, CardLink } from './../StyledComponents/Card';
import Button from './../StyledComponents/Button';

function ItemListSummaryData(props) {

  const { data, isError, setSelected, setModalState } = props
  return(
    <div>
      {console.log("Data?", data)}
      {console.log("Error?", isError)}

      { isError && <p> Error fetching content </p> } 
      { data ? null : (<div> Data Loading </div>)}
      { data && 
        <div>
            {data.map(item => (
              <CardWrapper key={item.id}>
                <CardTitle> { item.name } { item.rocket_name } </CardTitle>
                <CardText> { item.description ? item.description : null } </CardText>
                <CardLink href={ item.wikipedia }> Wiki </CardLink>
                <Button onClick={()=>{ setSelected(item.id); setModalState(true) }}> 
                  Learn more 
                </Button>
              </CardWrapper>
              ))
            }
        </div>
      }
    </div>
  );
};

export default ItemListSummaryData;