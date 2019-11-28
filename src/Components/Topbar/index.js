import React from "react";
// import "./style.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     AlgorithmList = []
    // }
  }
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-center">
            <NavDropdown title="Algorithms" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">A *</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Djikstra</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BFS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">DFS</NavDropdown.Item>
            </NavDropdown>
            <Form inline>
              <Button variant="outline-success">Find Path</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopBar;
