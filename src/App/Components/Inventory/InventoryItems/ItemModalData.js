import React from 'react';
import Capsules from '../ActiveSelectionData/Capsules';
import Cores from '../ActiveSelectionData/Cores';
import Dragons from '../ActiveSelectionData/Dragons';
import Missions from '../ActiveSelectionData/Missions';
import Ships from '../ActiveSelectionData/Ships';

function ItemModalData(props) {
  const { inventoryCategory, activeSelection, keepOpenActiveSelection } = props
  
  if (activeSelection ) {
    if ( inventoryCategory === 'capsules' ) {
      return <Capsules data={activeSelection} keepOpenActiveSelection={keepOpenActiveSelection}/> 
    } else if ( inventoryCategory === 'cores' ) {
      return <Cores data={activeSelection} keepOpenActiveSelection={keepOpenActiveSelection}/>
    } else if ( inventoryCategory === 'dragons' ) {
      return <Dragons data={activeSelection} keepOpenActiveSelection={keepOpenActiveSelection}/>
    } else if ( inventoryCategory === 'missions' ) {
      return <Missions data={activeSelection} keepOpenActiveSelection={keepOpenActiveSelection}/>
    } else if ( inventoryCategory === 'ships' ) {
      return <Ships data={activeSelection} keepOpenActiveSelection={keepOpenActiveSelection}/>
    }
  } else return null; 

}

export default ItemModalData;