import React, { useState } from 'react'
import { Jumbotron, Button, Card } from 'reactstrap'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const Project = props => {

  const [modal, setModal] = useState(false)
  
  const toggle = () => setModal(!modal)

  return (
    <>
      <div>
        <Button color="danger" onClick={toggle}><img className="projectPhoto" src={props.image} alt={props.name} /></Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>{props.name}</ModalHeader>
          <ModalBody>
      
            <h1 className="display-3">{props.name}</h1>
            <p className="lead">{props.technology}</p>
            <hr className="my-2" />
            <p>{props.description}</p>


          <p className="lead">
            <Button color="primary">
              <a className="deployedLink" href={props.link} target='_blank'>Link to App</a>
            </Button>{' '}
            <Button color="primary">
              <a className="deployedLink" href={props.repo} target='_blank'>Link to Repo</a>
            </Button>
          </p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>






    </>
  )
}

export default Project