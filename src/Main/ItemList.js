import React from 'react';
import ModalCustom from './ModalCustom';
import ItemModalData from './ItemModalData';
import ItemSummaryData from './ItemSummaryData';
import useModalWithData from './useModalWithData';

const ItemList = (props) => {

  const{ modalOpen, selected, setSelected, setModalState } = useModalWithData() 

  return(
    <div>
      {console.log("Data?", props.data)}
      {console.log("Error?", props.isError)}

      { props.isError && <p> Error fetching content </p> } 
      { props.data ? null : (<div> Data Loading </div>)}
      { props.data && 
        <div>
            {props.data.map(item => (

              <ItemSummaryData 
                key={item.id} 
                dragonName={item.name}
                rocketName={item.rocket_name}
                description={item.description}
                wikipedia={item.wikipedia}
              > </ItemSummaryData>

              <ModalCustom
              title="Item detail"
              isActive={modalOpen}
              handleClose={()=> setModalState(false)}
              >
                <ItemModalData data={selected}></ItemModalData>
              </ModalCustom>    
              
            ))}

        </div>
      }
    </div>
  );
}

export default ItemList;