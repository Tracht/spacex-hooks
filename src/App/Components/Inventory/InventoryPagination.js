import React from 'react';
import Link from '../../StyledComponents/Link';

const InventoryPagination = (props) => {
  const { inventoryCategory, pages, pageClick } = props
  return(
    <div>
      <h2> {inventoryCategory} </h2>
        {pages.map(pageNumber => (
            <Link large key={pageNumber} onClick={() => pageClick(pageNumber + 1)} >
             { pageNumber + 1 + ' '}
            </Link>
        ))} 
    </div>  
  ); 
}
export default InventoryPagination;