import React from 'react';
import Capsules from '../InventoryData/Capsules';
import Cores from '../InventoryData/Cores';
import Dragons from '../InventoryData/Dragons';
import Missions from '../InventoryData/Missions';
import Ships from '../InventoryData/Ships';

function ItemModalData(props) {
  const { data } = props
  if (!data) return null

  return(
    <div>
      <Capsules />
      <Cores />
      <Dragons />
      <Missions />
      <Ships />
    </div>
  )
}

export default ItemModalData;