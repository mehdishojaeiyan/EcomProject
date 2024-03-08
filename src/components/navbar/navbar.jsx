import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import MyApp from "../darkMode/myApp";
import { Icon } from "semantic-ui-react";
// import 'animate.min.css';

function NavBar() {
  return (
    <Navbar expand="lg" className=" menu">
      <Container fluid>
        <div
          id="ecom"
          className="animate__animated animate__flip "
          href="#home"
        >
          Ecom
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className="item-menu" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="item-menu" href="/leaders">
              Leaders
            </Nav.Link>
            <Nav.Link className="item-menu" href="/market">
              Market
            </Nav.Link>
            <NavDropdown
              className="item-menu"
              title="Tools"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
              <NavDropdown.Item href="/login">
              Calendar
              </NavDropdown.Item>
              <NavDropdown.Item href="login">Simulation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="login">
                Pricing
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="item-menu" href="/community">
              Community
            </Nav.Link>
            <Nav.Link className="item-menu" href="/watchList">
              Watch List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <form id="form" className="d-flex" role="search">
          <button id="icon">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input
            className="form-control me-2 "
            id="search"
            type="search"
            placeholder="Search ..."
            aria-label="Search"
          />

          {/* <button className="btn btn-inline-danger" type="submit">Search</button> */}
        </form>
        <NavDropdown
          className=" Language"
          title={<Icon className="navLnBtn" name="world" />}
          id="basic-nav-dropdow"
        >
          <NavDropdown.Item className="lng" href="#action/3.1">
            <i class="uk flag"></i>
            English
          </NavDropdown.Item>
          <NavDropdown.Item className="lng" href="#action/3.2">
            <i class="ir flag"></i>
            فارسی
          </NavDropdown.Item>
        </NavDropdown>
       <Nav.Link href='/login'><button className="login">Sgin up</button></Nav.Link> 
       <Nav.Link href='/login'><button className="login">Login</button></Nav.Link> 
        
        {/* <MyApp/> */}
      </Container>
    </Navbar>
  );
}

export default NavBar;
