import React from 'react'
import Project from '../../components/Project'
import { Container } from 'reactstrap';
import busks from '../../photos/busks.png'
import budget from '../../photos/budget.png'
import fitness from '../../photos/fitness.png'
import portfolio from '../../photos/portfolio.png'
import notetaker from '../../photos/notetaker.png'
import pokemonImg from '../../photos/pokemonImg.png'

const Portfolio = () => {
  return (
    <>
      <Container>

        <h1 className="myWork">My Work</h1>

        <Project
          name={'Blues It'}
          technology={'Full Stack MERN Application.  Includes fully functional user authentication with passport and true image upload.'}
          description={'This application is a music oriented social media platform. While most social platforms are littered with advertising, specific display algorithms, and sell your data, BluesIt provides a clean and intuitive interface for musicians and music lovers to share their thoughts and interests with each other. Log in and start checking out some of the threads that might interest you, and then post and share your thoughts! When you see a post you are interested in, give it a like and or comment on that thread and share your thoughts with the user who made that post!'}
          link={'https://desolate-sands-65866.herokuapp.com/'}
          repo={'https://github.com/DevinCastro/BluesIt'}
          image={'https://user-images.githubusercontent.com/65981639/94970039-a4c80e80-04b8-11eb-93fa-76592b62facc.png'}

        />


        <Project
          name={'Busks in Town'}
          technology={'This application uses node and express to set up the server and utilizes a mySQL database. '}
          description={'Busks in town allows a user to create an artist account filled with their photo, bio, genre, bio, and social media links.  Then that artist can create upcoming concerts and post when and where those concerts will be held!'}
          link={'https://guarded-crag-60613.herokuapp.com/'}
          repo={'https://github.com/datrimboli/BusksInTown'}
          image={busks}

        />

        <Project
          name={'Fitness Tracker'}
          technology={'This full stack application uses, node.js and express to create the server. We are using mongoDB and mongoose for our database. The application is deployed with heroku.'}
          description={'This application allows a user to log their workouts everyday. They can create new workouts and add which exercises they include in that workout. They can pick up a workout where they left off, and lastly they can view their stats from all of the previous workouts organized by some graphs and pie charts.'}
          link={'https://thawing-bayou-03032.herokuapp.com/'}
          repo={'https://github.com/DevinCastro/workout-tracker'}
          image={fitness}

        />

        <Project
          name={'Online - offline budget tracker'}
          technology={'This full stack application uses, node.js and express to create the server. We are using mongoDB and mongoose for our database. We also use a manifest.json file, a service-worker, and an indexDB file to allow us to cache all our data and use the application offline.'}
          description={'This application allows a user to log and track their expensives. This is also a progressive web application and still mantains functionality if you are using it offline.'}
          link={'https://glacial-bastion-76923.herokuapp.com/'}
          repo={'https://github.com/DevinCastro/Online-offline-budget-tracker'}
          image={budget}

        />

        <Project
          name={'React Portfolio'}
          technology={'This is a React application.'}
          description={'This is the current application you are looking at right now.  Using react to render everything on the front end and reactstrap to sytle everything'}
          link={'http://DevinCastro.github.io/react-portfolio'}
          repo={'https://github.com/DevinCastro/react-portfolio'}
          image={portfolio}

        />

        <Project
          name={'Note Taker'}
          technology={'This application uses an express server and Node.'}
          description={'This is a simple note taking application. The User can add any number of notes organized by a title and save it. They can view previously written notes and then they can delete them.'}
          link={'https://desolate-ravine-80676.herokuapp.com/'}
          repo={'https://github.com/DevinCastro/note-taker'}
          image={notetaker}

        />


       


      </Container>
    </>
  )
}

export default Portfolio
