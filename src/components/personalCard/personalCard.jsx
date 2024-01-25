import { Link } from 'react-router-dom';
import './personalCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar } from '@fortawesome/free-regular-svg-icons';
import avatar1 from '../../assets/image/avatar1.webp';
import { useContext } from 'react';
import LeaderContext from "../../context/leader";




const PersonalCard = ({name , img , roi , copiers , id}) => {
    const leaderContext = useContext(LeaderContext)
    return ( <>
        <div className='generalPart mb-3'>
            <div className='firstLine'>
                <div><p className='risk'>Risk</p></div>
                <div><Link to={`/leader/${id}`}><img className='personImg' src={img}/></Link></div>
                <div><a href='#' id='star' ><FontAwesomeIcon icon={faStar} /></a></div>

            </div>
            <div className='secondLine'>
               <p ><Link to={`/leader/${id}`} className='namePersonalCard'>{name}</Link></p> 
            </div>
            <div className='thirdLine'>
                <span id='cardCopiers'>COPIERS: {copiers}</span>
            </div>
            <div className='roi'>
                <p>{roi}</p>
            </div>
            <div></div>
        </div>
    </> );
}
 
export default PersonalCard;