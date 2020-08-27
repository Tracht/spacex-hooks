import React from 'react';
import CardWrapper from './StyledComponents/CardWrapper';
import CardTitle from './StyledComponents/CardTitle';
import CardText from './StyledComponents/CardText';
import CardLink from './StyledComponents/CardLink';

const ItemList = (props) => {

  return(
    <div>
      {console.log("Data?", props.data)}
      {console.log("Error?", props.isError)}

      { props.isError && <p> Error fetching content </p> } 
      { props.data ? null : (<div> Data Loading </div>)}
      { props.data && 
        <div>
            {props.data.map(item => (
              <CardWrapper key={item.id}>
                <CardTitle> { item.name } {item.rocket_name} </CardTitle>
                <CardText> { item.active ? "Status: Active" : "Status: Not Active" } </CardText>
                <CardLink href={item.wikipedia}> Wiki </CardLink>
              </CardWrapper>
            )
            )}
        </div>
      }
    </div>
  );
}

export default ItemList;