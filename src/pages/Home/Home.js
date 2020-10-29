import React from 'react'
import '../../index.css'
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap'
import me from '../../photos/me3.jpg'
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
                  <img className="logo" src="https://www.flaticon.com/svg/static/icons/svg/2166/2166822.svg" alt="logo" />
                  <h1 className="isBlue">Front End</h1>
                  <p>
                    HTML5, CSS3
                  <br />
                    <br />
                  Scripts (client-side):
                  <br />
                  JavaScript, jQuery, React.js
                  <br />
                  AJAX, RESTful API’s
                  <br />
                    <br />
                  UI frameworks:
                  <br />
                  Bootstrap, React UI Components
                  </p>
                </Col>

                <Col md="4 text-center">
                  <img className="logo" src="https://static.thenounproject.com/png/9658-200.png" alt="icon" />
                  <h1 className="isBlue">Database</h1>
                  <p>
                    MySQL, MongoDB
                  </p>
                </Col>
                <Col md="4 text-center">
                  <img className="logo" src="https://static.thenounproject.com/png/3190581-200.png" alt="icon" />
                  <h1 className="isBlue">Back End</h1>
                  <p>
                    Scripts (server-side):
                    <br />
                    Node.js, Express.js
                    <br />
                    <br />
                    Node Package Managers:
                    <br />

                    Express, Sequelize, Express-handlebars,
                    <br />
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
              <a target='_blank' href="https://github.com/DevinCastro/"><img className="logo" src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg" alt="github" /></a>
              {" "}
              <a target='_blank' href="https://www.linkedin.com/in/devin-castro-17a62bba/"><img className="logo" src="https://freeiconshop.com/wp-content/uploads/edd/linkedin-outline.png" alt="linkedin" /></a>
              {" "}
              <a href="mailto:devincastro321@gmail.com"><img className="logo" src="https://i.pinimg.com/originals/1b/3b/ec/1b3bec070f7bb1c007dbaaeafaeb21b7.png" alt="github" /></a>

              <br />
              <br />

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
