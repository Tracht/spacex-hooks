import React from 'react';
import ModalCustom from './ModalCustom';
import ItemModalData from './ItemModalData';
import ItemListSummaryData from './ItemListSummaryData';
import useModalWithData from './useModalWithData';

const ItemList = props => {

  const { data, modalOpen, selected, setSelected, setModalState } = useModalWithData(); 

  return(
    <div>
      <ModalCustom
        title="Item detail"
        isActive={modalOpen}
        handleClose={()=> setModalState(false)}
      >
        <ItemModalData data={selected}></ItemModalData>
      </ModalCustom>    

      <ItemListSummaryData 
        data={data}
        setSelected={setSelected}
        setModalState={setModalState}
      > </ItemListSummaryData>
    </div>
  );
}

export default ItemList;