import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarText,
  NavItem,
  NavLink
} from 'reactstrap'


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    
      <nav>
        <Navbar color="#100E17" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <a className="myNav" href="#techSkills">Tech Skills</a>
              </NavItem>
              {" "}
              <NavItem>
                <a className="myNav" href="#myWork">My Work</a>
              </NavItem>
              {" "}
              <NavItem>
                <a className="myNav" href="#contact">Contact</a>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      
      </nav>
    <Home />
    </>
  )
}

export default App