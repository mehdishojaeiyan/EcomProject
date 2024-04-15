import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return ( <>
      
      <footer id="footer-main">
        <div className="footer-grid">
        
              <section className="footer-1 footerA">
                <h4 id="EcomFooter">Ecom</h4>
                 
              </section>

            <section className="footer-2 footerA">
                <h4>Legal</h4>
                  <div><a href="#">Policy Privacy</a></div>
                  <div><a href="#">Terms Of Service</a></div>
                  <div><a href="#">Lorem</a></div>
                
              </section>

            <section className="footer-3 footerA">
              <h4>Tools</h4>
              <div><a href="#">Calender</a></div>
                  <div><a href="#">Simulation</a></div>
                  <div><a href="#">Blog</a></div>
                  <div><a href="#">Lorem</a></div>
            </section>

            <section className="footer-4 footerA">
              <h4>About Us</h4>
              <div><a href="#">Lorem</a></div>
                  <div><a href="#">Contact</a></div>
                  <div><FontAwesomeIcon id="IconFont" icon={faPhone} />
                    <span> +98**********</span>
                  </div>
                  <div><FontAwesomeIcon id="IconFont" icon={faEnvelope} />
                    <span> ***@gmail.com</span>
                  </div>
              </section>
        </div>
      </footer>
    </> );
}
 
export default Footer;