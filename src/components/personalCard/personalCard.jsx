import { Link } from 'react-router-dom';
import './personalCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar } from '@fortawesome/free-regular-svg-icons';
import jonas from "../../assets/image/jonas.jpg"

const PersonalCard = () => {
    return ( <>
        <div className='generalPart'>
            <div className='firstLine'>
                <div><p>Risk</p></div>
                <div><img className='personImg' src={jonas}/></div>
                <div><a href='#' id='star' ><FontAwesomeIcon icon={faStar} /></a></div>

            </div>
            <div className='secondLine'>
                <p>AlpineFX</p>
            </div>
            <div className='thirdLine'>
                <p>COPIERS :</p>
            </div>
            <div className='fourthLine'>
                <button>+8.27%</button>
            </div>
            <div></div>
        </div>
    </> );
}
 
export default PersonalCard;