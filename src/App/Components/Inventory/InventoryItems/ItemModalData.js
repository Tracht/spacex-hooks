import React from 'react';
import Capsules from '../ActiveSelectionData/Capsules';
import Cores from '../ActiveSelectionData/Cores';
import Dragons from '../ActiveSelectionData/Dragons';
import Missions from '../ActiveSelectionData/Missions';
import Ships from '../ActiveSelectionData/Ships';

function ItemModalData(props) {
  const { inventoryCategory, activeSelection, keepOpenActiveSelection } = props
  
  if ( activeSelection ) {
    if ( inventoryCategory === 'capsules' ) {
      return <Capsules activeSelection={activeSelection} keepOpenActiveSelection={keepOpenActiveSelection}/> 
    } else if ( inventoryCategory === 'cores' ) {
      return <Cores activeSelection={activeSelection} keepOpenActiveSelection={keepOpenActiveSelection}/>
    } else if ( inventoryCategory === 'dragons' ) {
      return <Dragons activeSelection={activeSelection} keepOpenActiveSelection={keepOpenActiveSelection}/>
    } else if ( inventoryCategory === 'missions' ) {
      return <Missions activeSelection={activeSelection} keepOpenActiveSelection={keepOpenActiveSelection}/>
    } else if ( inventoryCategory === 'ships' ) {
      return <Ships activeSelection={activeSelection} keepOpenActiveSelection={keepOpenActiveSelection}/>
    }
  } else return null; 

}

export default ItemModalData;