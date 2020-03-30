import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Logout from './logout';
import Home from './home';
import Books from './books';


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Router>
          <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">BooksList</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink href="/home/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="/books/">Books</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="/logout/">Logout</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/books">
                    {/* <TileList /> */}
                    <Books />
                </Route>
                <Route path="/logout">
                    <Logout />
                </Route>
            </Switch>
        </div>

      </Router>
    
  );

}

export default Example;