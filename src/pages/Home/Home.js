import React from 'react'
import '../../index.css'
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap'
import me from '../../photos/me.jpg'
import Project from '../../components/Project'
import bluesIt from '../../photos/logo.png'



const Home = () => {
  return (
    <>
      <section>
        <div>
          <Container>

            <div className="intro text-center">
              <h1>Hello, my name is <span className="devinCastro">Devin Castro.</span></h1>
              <h2>I'm a Full Stack Web Developer.</h2>
              <p className="small">And I play guitar.</p>
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


          <a name='techSkills'></a>
          <div>

            <Jumbotron className="jumbotron">
              <Row>
                <h1></h1>
                <Col md="4 text-center">
                  <img className="logo" src="https://www.flaticon.com/svg/static/icons/svg/2166/2166822.svg" alt="logo"/>
                  <h1 className="isBlue">Front End</h1>
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
                  <img className="logo" src="data:image/png;base64,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" alt=""/>
                  <h1 className="isBlue">Database</h1>
                  <p>
                    MySQL, MongoDB 
                  </p>
                </Col>
                <Col md="4 text-center">
                  <img className="logo" src="https://n7.nextpng.com/sticker-png/247/568/sticker-png-computer-icons-others-miscellaneous-administrative-tools-tools-icon-tool-thumbnail.png" alt=""/>
                  <h1 className="isBlue">Back End</h1>
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

              </Row>
            </Jumbotron>



          </div>

          <a name='myWork'></a>
          <div className="projects text-center">
            <h1>My recent work</h1>
            <Container>
              <Row>
                <Col md='4'>
                  
                  <Project
                    name={'Busks in Town'}
                    technology={'This application uses node and express to set up the server and utilizes a mySQL database. '}
                    description={'Busks in town allows a user to create an artist account filled with their photo, bio, genre, bio, and social media links.  Then that artist can create upcoming concerts and post when and where those concerts will be held!'}
                    link={'https://guarded-crag-60613.herokuapp.com/'}
                    repo={'https://github.com/datrimboli/BusksInTown'}
                    image={'https://guarded-crag-60613.herokuapp.com/photos/mainPhoto.jpg'}

                  />


                </Col>
                <Col md='4'>
                  
                  <Project
                    name={'Blues It'}
                    technology={'Full Stack MERN Application.  Includes fully functional user authentication with passport and true image upload.'}
                    description={'This application is a music oriented social media platform. While most social platforms are littered with advertising, specific display algorithms, and sell your data, BluesIt provides a clean and intuitive interface for musicians and music lovers to share their thoughts and interests with each other. Log in and start checking out some of the threads that might interest you, and then post and share your thoughts! When you see a post you are interested in, give it a like and or comment on that thread and share your thoughts with the user who made that post!'}
                    link={'https://desolate-sands-65866.herokuapp.com/'}
                    repo={'https://github.com/DevinCastro/BluesIt'}
                    image={bluesIt}

                  />


                </Col>
                <Col md='4'>
                  
                  <Project
                    name={'Google Book Search'}
                    technology={'This is MERN application. Utilizing MongoDB for my database , Express to handle our server, React to handle the front end, and Node.js to connect the backend. We also utilize a 3rd party api for google books to get the books from their database. We are also using reactstrap, and react-router-dom.'}
                    description={'This is a full stack MERN web application that allows a user to search for any book by its name. Then a list of books will populate as search results, and the user can see the book title, cover, description, authors, and the link to the the book info. The user can then save that book into their dashboard'}
                    link={'https://warm-peak-53739.herokuapp.com'}
                    repo={'https://github.com/DevinCastro/google-books-search'}
                    image={'https://freesvg.org/img/help-books.png'}

                  />



                </Col>



              </Row>

            </Container>




          </div>

          <a name="contact"></a>
          <div className="blue text-center">
            <div className="bio">
              <h3>Let's work together soon!</h3>
              <a target='_blank' href="https://github.com/DevinCastro/"><img className="logo" src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg" alt="github"/></a>
              {" "}
              <a target='_blank' href="https://www.linkedin.com/in/devin-castro-17a62bba/"><img className="logo" src="https://freeiconshop.com/wp-content/uploads/edd/linkedin-outline.png" alt="linkedin"/></a>
              {" "}
              <a href="mailto:devincastro321@gmail.com"><img className="logo" src="https://i.pinimg.com/originals/1b/3b/ec/1b3bec070f7bb1c007dbaaeafaeb21b7.png" alt="github"/></a>
              
              <br/>
              <br/>

              <h4>(909) 438-5415</h4>
              <h5>devincastro321@gmail.com</h5>

              <a target='_blank' href="https://drive.google.com/file/d/1pE07hDFEvdWTlyh2Q-xbgQdJAPXp5QmW/view?usp=sharing"><Button className="resume">View my resume</Button></a>
            </div>
          </div>




        </div>

      </section>



    </>
  )
}

export default Home
