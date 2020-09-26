import React from 'react';
import Button from '../../../StyledComponents/Button';
import Link from '../../../StyledComponents/Link';
import {ModalOverlay, ModalContent, Modal} from '../../../StyledComponents/Modal';

function Missions(props) {
  const { activeSelection, keepOpenActiveSelection } = props
  if (!activeSelection) return null

  return(
    <ModalOverlay>
      <Modal>
        <ModalContent>
          <h1>{ activeSelection.mission_name }</h1>

          <h2>Background</h2>
          <p>{ activeSelection.description }</p>
          
          { activeSelection.manufacturers ? <h2>Manufacturers</h2> : null }
          { activeSelection.manufacturers ? 
            activeSelection.manufacturers.map((item) => {
              return (
                <div>
                  <p key={item}> {item} </p>
                </div>
              )}) : <p> No manufacturers </p>
          }    

          { activeSelection.payload_ids ? <h2>Payloads</h2> : null }
          { activeSelection.payload_ids[0] ?
            activeSelection.payload_ids.map((item) => {
              return (
                <div>
                  <p key={item}> {item} </p> 
                </div>
            )}) : <p> No Payloads </p>
          }

          { activeSelection.wikipedia || activeSelection.website || activeSelection.twitter ? <h2>Learn more </h2> : null }
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