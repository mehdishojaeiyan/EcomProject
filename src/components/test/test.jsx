
import { Link } from 'react-router-dom';
import './personalCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar } from '@fortawesome/free-regular-svg-icons';
import avatar1 from '../../assets/image/avatar1.webp';
import { useContext } from 'react';
import LeaderContext from "../../context/leader";
import ChartCard from './personalChart';




const PersonalCard = ({name , img , roi , copiers , id , risk}) => {
    const leaderContext = useContext(LeaderContext)
    return ( <>
        <div className='generalPart mb-3'>
            <div className='firstLine'>
                <div><p className='risk'>Risk{risk}</p></div>
                <div><Link to={`/leader/${id}`}><img className='personImg' src={img}/></Link></div>
                <div><Link to={`/watchList/${id}`} id='star' ><FontAwesomeIcon icon={faStar} /></Link></div>

            </div>
            <div className='secondLine'>
               <span ><Link to={`/leader/${id}`} className='namePersonalCard'>{name}</Link></span> 
            </div>
            <div className='thirdLine'>
                <span id='cardCopiers'>COPIERS: {copiers}</span>
            </div>
            <div className='roi'>
                <p title='ROI'>{roi}</p>
            </div>
            <div className='chartCard'>
                <ChartCard/>
            </div>
        </div>
    </> );
}
 
export default PersonalCard;





import './watchList.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import LeaderContext from '../../context/leader';
import ChartCard from '../../components/personalCard/personalChart';
import { useParams } from 'react-router-dom';



const WatchList = () => {//////
    
    const leaderContext = useContext(LeaderContext);
    const {id} = useParams();
  
    const currentUser = leaderContext.leader.find((user) => user.id === parseInt(id));
    if (!currentUser) {
      return <p>کاربر پیدا نشد!</p>;
    }
    return ( <>
    <h2 className='p-4'>Watch List</h2>
    <div className="watcCard p-4">
    <div className='generalPart mb-3 '>
            <div className='firstLine'>
                <div><p className='risk'>Risk{currentUser.risk}</p></div>
                <div><Link to={`/leader/${id}`}><img className='personImg' src={currentUser.avatar}/></Link></div>
                <div><button>-</button></div>

            </div>
            <div className='secondLine'>
               <span ><Link to={`/leader/${id}`} className='namePersonalCard'>{currentUser.name}</Link></span> 
            </div>
            <div className='thirdLine'>
                <span id='cardCopiers'>COPIERS: {currentUser.copiers}</span>
            </div>
            <div className='roi'>
                <p title='ROI'>{currentUser.ROI}</p>
            </div>
            <div className='chartCard'>
                <ChartCard/>
            </div>
        </div>
        </div>
    </> );
}
 
export default WatchList;