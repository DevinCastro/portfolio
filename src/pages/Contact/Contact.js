import React from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from 'reactstrap'

const Contact = () => {
  return (
    <Container>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="test" name="name" placeholder="John Doe" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="johndoe@gmail.com" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="text" name="Enter your message" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>

          <br/>

        <a className="resume" target="_blank" href="https://drive.google.com/file/d/1ndE82WoBnJDtFSzsTgw4Pq5GcVtk2GzX/view?usp=sharing">
        <Button color="danger" className="myWork">
          My Resume
        </Button>
        </a>
    </Container>
  )
}

export default Contact