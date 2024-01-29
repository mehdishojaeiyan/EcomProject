import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import MyApp from '../darkMode/myApp';
// import 'animate.min.css';

function NavBar() {
  return (
    <Navbar expand="lg" className=" menu">
      <Container fluid>
        <div id='ecom' className='animate__animated animate__flip '  href="#home">Ecom</div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className='item-menu' href="/">Home</Nav.Link>
            <Nav.Link className='item-menu' href="/leaders">Leaders</Nav.Link>
            <NavDropdown className='item-menu' title="Market" id="basic-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='item-menu' title="Tools" id="basic-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='item-menu' href="#community">Community</Nav.Link>
            <Nav.Link className='item-menu' href="/watchList">Watch List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <form id='form' className="d-flex" role="search">
        <button id='icon'><FontAwesomeIcon icon={faSearch} /></button>
        <input className="form-control me-2 " id='search' type="search" placeholder="Search ..." aria-label="Search"/>
        
        {/* <button className="btn btn-inline-danger" type="submit">Search</button> */}
      </form>
        <NavDropdown className=' Language' title="Ln" id="basic-nav-dropdow">
              <NavDropdown.Item className='lng' href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item className='lng' href="#action/3.2">
                فارسی
              </NavDropdown.Item>
        </NavDropdown>
        <button className='login'>Sgin up</button>
        <button className='login'>Login</button>
        {/* <MyApp/> */}
        
      </Container>
    </Navbar>
  );
}

export default NavBar;