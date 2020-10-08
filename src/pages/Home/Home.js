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
              <img className="guitarPhoto" src={me} alt="me" />
            </div>

            <br /><br />


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
                <h1></h1>
                <Col md="4 text-center">
                  <h1>Front End</h1>
                  <p>
                    Web Frameworks:
                    <br/>
                    HTML5, CSS3
                  <br />
                  <br />
                  Scripts (client-side):
                  <br/>
                  JavaScript, jQuery, React.js
                  <br/>
                  AJAX, RESTful API’s
                  <br/>
                  <br/>
                  UI frameworks:
                  <br/>
Bootstrap, React UI Components
                  </p>
                </Col>

                <Col md="4 text-center">
                  <h1>Back End</h1>
                  <p>
                    Scripts (server-side):
                    <br/>
                    Node.js, Express.js
                    <br/>
                    <br/>
                    Node Package Managers:
                    <br/>

                    Express, Sequelize, Express-handlebars, 
                    <br/>
                    Mongoose, Axios   
                  </p>
                </Col>

                <Col md="4 text-center">
                  <h1>Database</h1>
                  <p>
                    MySQL, MongoDB 
                  </p>
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
