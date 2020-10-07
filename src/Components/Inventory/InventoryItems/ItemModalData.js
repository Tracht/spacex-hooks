import React from 'react';
import Capsules from '../ActiveSelectionData/Capsules';
import Cores from '../ActiveSelectionData/Cores';
import Dragons from '../ActiveSelectionData/Dragons';
import Missions from '../ActiveSelectionData/Missions';
import Ships from '../ActiveSelectionData/Ships';

function ItemModalData(props) {
  
  const { inventoryCategory, activeSelection, keepOpenActiveSelection } = props

    if ( activeSelection ) {
      switch(inventoryCategory) {
        case 'capsules':
          return <Capsules activeSelection={activeSelection} keepOpenActiveSelection={keepOpenActiveSelection}/> ;
        case 'cores': 
          return <Cores activeSelection={activeSelection} keepOpenActiveSelection={keepOpenActiveSelection}/>;
        case 'dragons': 
          return <Dragons activeSelection={activeSelection} keepOpenActiveSelection={keepOpenActiveSelection}/>;
        case 'missions':
          return <Missions activeSelection={activeSelection} keepOpenActiveSelection={keepOpenActiveSelection}/>;
        case 'ships':
          return <Ships activeSelection={activeSelection} keepOpenActiveSelection={keepOpenActiveSelection}/>;
        default:
          return <Capsules activeSelection={activeSelection} keepOpenActiveSelection={keepOpenActiveSelection}/>;
      }
    } else return null; 

}

export default ItemModalData;