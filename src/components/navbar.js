import React from 'react';
import { Link } from "react-router-dom";
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
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
          <Navbar color="white" light expand="md" className="pl-0">
            <NavbarBrand href="/"><h1 className="name-title">Anabella Volpi</h1></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              {/* Mobile nav */}
              <Nav className="ml-auto d-xs-block d-md-none" navbar>
                <NavItem>
                  <NavLink href="/">Universal Claim App</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/browser-extension">Universal Claim App</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="https://www.linkedin.com/in/anabellavolpi/">LinkedIn</NavLink>
                </NavItem>
                {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Links
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                    <NavItem>
                      <NavLink href="https://www.linkedin.com/in/anabellavolpi/">LinkedIn</NavLink>
                    </NavItem>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
              </Nav>
              {/* Desktop nav */}
              <Nav className="ml-auto d-none d-md-flex" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Projects
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                    <NavItem>
                      <Link to="/">Universal Claim App</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/browser-extension">Browser Extension</Link>
                    </NavItem>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="https://www.linkedin.com/in/anabellavolpi/">LinkedIn</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
      </div>
    );
  }
}