import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
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
     {/* <Router> */}
    
      <nav>
        <Navbar color="#100E17" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <a href="#techSkills">Tech Skills</a>
                <a href="#myWork">My Work</a>
                <a href="#contact">Contact</a>
              </NavItem>
              {/* <NavItem>
                <NavLink><Link to="/myPortfolio">Portfolio</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/contactMe">Contact</Link></NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
        {/* <Switch>
          <Route exact path="/react-portfolio" component={Home} />
          <Route path="/myPortfolio" component={Portfolio} />
          <Route path="/contactMe" component={Contact} />
        </Switch> */}
      </nav>

     
     {/* </Router> */}
    <Home />
    </>
  )
}

export default App