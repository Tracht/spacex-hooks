import React from 'react';
import ItemModalData from './ItemModalData';
import ItemsAll from './ItemsAll';

const ItemListContainer = props => {

  return(
    <div>
      <ItemModalData ></ItemModalData> 
      <ItemsAll data={props.data}> </ItemsAll>
    </div>
  );
}

export default ItemListContainer;