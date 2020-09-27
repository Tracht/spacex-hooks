import React from 'react';
import { LinkLarge } from '../../StyledComponents/Link';

const InventoryPagination = (props) => {
  const { inventoryCategory, pages, pageClick } = props
  return(
    <div>
      <h2> {inventoryCategory} </h2>
        {pages.map(pageNumber => (
            <LinkLarge large key={pageNumber} onClick={() => pageClick(pageNumber + 1)} >
             { pageNumber + 1 + ' '}
            </LinkLarge>
        ))} 
    </div>  
  ); 
}
export default InventoryPagination;