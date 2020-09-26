import React from 'react';
import Button from '../../../StyledComponents/Button';
import Link from '../../../StyledComponents/Link';
import {ModalOverlay, ModalContent, Modal, ModalTitle} from '../../../StyledComponents/Modal';

function Missions(props) {
  const { activeSelection, keepOpenActiveSelection } = props
  if (!activeSelection) return null

  return(
    <ModalOverlay>
      <Modal>
        <ModalContent>
          <h1>{ activeSelection.mission_name }</h1>

          <ModalTitle green center> Background </ModalTitle>
          <p>{ activeSelection.description }</p>
          
          { activeSelection.manufacturers ? <ModalTitle green center> Manufacturers </ModalTitle> : null }
          { activeSelection.manufacturers ? 
            activeSelection.manufacturers.map((item) => {
              return (
                <div>
                  <p key={item}> {item} </p>
                </div>
              )}) : <p> No manufacturers </p>
          }    

          { activeSelection.payload_ids ? <ModalTitle green center> Payloads </ModalTitle> : null }
          { activeSelection.payload_ids[0] ?
            activeSelection.payload_ids.map((item) => {
              return (
                <div>
                  <p key={item}> {item} </p> 
                </div>
            )}) : <p> No Payloads </p>
          }

          { activeSelection.wikipedia || activeSelection.website || activeSelection.twitter ?  <ModalTitle green center> Learn more </ModalTitle> : null }
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