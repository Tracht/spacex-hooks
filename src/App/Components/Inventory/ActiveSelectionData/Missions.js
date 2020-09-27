import React from 'react';
import Button from '../../../StyledComponents/Button';
import Link from '../../../StyledComponents/Link';
import {ModalOverlay, ModalContent, ModalHeader, Modal, ModalTitle, ModalText } from '../../../StyledComponents/Modal';

function Missions(props) {
  const { activeSelection, keepOpenActiveSelection } = props
  if (!activeSelection) return null

  return(
    <ModalOverlay>
      <Modal>
        <ModalContent>
          <ModalHeader>{ activeSelection.mission_name }</ModalHeader>

          <ModalTitle green> Background </ModalTitle>
          <ModalText>{ activeSelection.description }</ModalText>
          
          { activeSelection.manufacturers ? <ModalTitle green center> Manufacturers </ModalTitle> : null }
          { activeSelection.manufacturers ? 
            activeSelection.manufacturers.map((item) => {
              return (
                <div>
                  <ModalText> key={item}> {item} </ModalText>
                </div>
              )}) : <ModalText> No manufacturers </ModalText>
          }    

          { activeSelection.payload_ids ? <ModalTitle green> Payloads </ModalTitle> : null }
          { activeSelection.payload_ids[0] ?
            activeSelection.payload_ids.map((item) => {
              return (
                <div>
                  <ModalText key={item}> {item} </ModalText> 
                </div>
            )}) : <ModalText> No Payloads </ModalText>
          }

          { activeSelection.wikipedia || activeSelection.website || activeSelection.twitter ?  <ModalTitle green> Learn more </ModalTitle> : null }
          { activeSelection.wikipedia && <Link href={activeSelection.wikipedia} > Wikipedia </Link> } <br></br>
          { activeSelection.website && <Link href={activeSelection.website} > Website </Link> } <br></br>
          { activeSelection.twitter && <Link href={activeSelection.twitter} > Twitter </Link> } <br></br>
          
          <Button green onClick={keepOpenActiveSelection} type="submit" >
            Close
          </Button>
          <br></br>
        </ModalContent>
      </Modal> 
    </ModalOverlay>
  )
}

export default Missions;