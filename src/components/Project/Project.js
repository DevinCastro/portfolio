import React, { useState } from 'react'
import { Jumbotron, Button, Card } from 'reactstrap'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const Project = props => {

  const [modal, setModal] = useState(false)
  
  const toggle = () => setModal(!modal)

  return (
    <>
      <div>
        <Card className='imgWrap black text-center'>

          <div className='description'>
            <div className="cardText">
            <h1>{props.name}</h1>
            <Button onClick={toggle}>More Details</Button>
            </div>
          </div>

          <img className="projectPhoto" src={props.image} alt={props.name} />
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}><h1>{props.name}</h1></ModalHeader>
          <ModalBody>
      
            <p>{props.technology}</p>
            <hr className="my-2" />
            <p>{props.description}</p>


          <p className="lead text-center">
                
                <a className="deployedLink" href={props.link} target='_blank'><Button color="info">Link to App </Button></a>
           {' '}
                
                <a className="deployedLink" href={props.repo} target='_blank'><Button color="info">Link to Repo</Button></a>
            
          </p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Close</Button>
          </ModalFooter>
        </Modal>
        </Card>
      </div>






    </>
  )
}

export default Project