import React from 'react'
import '../../index.css'
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap'
import me from '../../photos/me.jpg'



const Home = () => {
  return (
    <>
      <section>
        <div>
          <Container>

            <div className="text-center">
              <h1>Hello, my name is <span className="devinCastro">Devin Castro.</span></h1>
              <h2>I'm a Full Stack Web Developer.</h2>
              <p>And I play guitar.</p>
            </div>

      
          <div className="text-center">
            <img className="guitarPhoto"src={me} alt="me"/>
          </div>

          <br/><br/>


          </Container>

          <div className="blue text-center">
            <div className="bio">
            <h3>Thanks for stopping by.</h3>
              <p className="aboutMe">Full Stack Web Developer with a Bachelor's degree in Mathematics having an immense passion for working collaboratively to solve problems. Recently obtained a certificate in full stack web development at the UCI Coding Bootcamp. Ambitious and ready to handle accelerated learning, fast paced work flow, and always meet deadlines with methodical organization and planning. Goal-oriented team player that thrives on clear communication.</p>
            </div>
          </div>

          <div>

            <Jumbotron className="jumbotron">
              <Row>
                <h1 ></h1>
                <Col md="4 text-center">
                  <h1>one</h1>
                </Col>

                <Col md="4 text-center">
                  <h1>one</h1>
                </Col>

                <Col md="4 text-center">
                  <h1>one</h1>
                </Col>



              </Row>
    
            </Jumbotron>
      
          </div>


        </div>

      </section>



    </>
  )
}

export default Home
