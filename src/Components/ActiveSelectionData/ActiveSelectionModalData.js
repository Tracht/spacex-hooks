import React from 'react';
import Capsules from './Capsules';
import Cores from './Cores';
import Dragons from './Dragons';
import Missions from './Missions';
import Ships from './Ships';

function ActiveSelectionModalData(props) {
  
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

export default ActiveSelectionModalData;