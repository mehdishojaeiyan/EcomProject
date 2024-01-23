import {Nav} from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';
import './leadNav.css'




function LeadNav() {
  return (<>
    {/* <Nav  justify  variant="tabs" defaultActiveKey="/home">
      <Nav.Item >
        <NavLink className='leadNav' eventKey="link-1" to="/overView">Over View</NavLink>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='leadNav' eventKey="link-2" href="/state" >Stats</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='leadNav' href="/portfolio" >Portfolio </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='leadNav' href="/feed" >Feed </Nav.Link>
      </Nav.Item>
    </Nav> */}
  
<ul className="nav nav-tabs">
  <li className="nav-item ">
    <Link className="nav-link leadNav " aria-current="page" to="/leader/overView">OverView</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link leadNav" to="/stats">State</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link leadNav" to="/portfolio">portfolio</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link leadNav" to="/feed">Feed</Link>
  </li>
 
</ul>
    
    </>
  );
}

export default LeadNav;