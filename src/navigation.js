import React from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from "react-bootstrap";

class NavBar extends React.Component{

    render(){
        return(
            <Navbar>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        WOMEN
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        MEN
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        KIDS
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        ACCESSORIES
                    </NavItem>
                    <NavItem eventKey={5} href="#">
                        SPORTS
                    </NavItem>
                    <NavItem eventKey={6} href="#">
                        HOME & LIVING
                    </NavItem>
                    <NavItem eventKey={7} href="#">
                        TRIAL
                    </NavItem>
                    <NavItem eventKey={8} href="#">
                        JUICE
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBar;