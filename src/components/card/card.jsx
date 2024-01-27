import './card.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useContext} from 'react';
import LeaderContext from '../../context/leader';
import { Link } from 'react-router-dom';

const Card = () => {
    const leaderContext=useContext(LeaderContext)
    const leaders = leaderContext.leader.slice(5,9)

    return ( <>
        <div className='card'>
                <div className='title'>
                    <span style={{fontSize:'large'}}>Top Performing 1 year</span>
                    <Link to={`/topperforming`}> 
                      <button className='iconBtn'><FontAwesomeIcon id="iconCard" icon={faArrowRight} /></button> </Link>
                </div>
               
                {leaders.map(user=>{
                    return (
                        <div className='rowUser'>
                           <Link to={`/leader/${user.id}`}> <img className='avatar' src={user.avatar} alt='Avatar'/> </Link>
                            <span ><a className='userTop'  href={`/leader/${user.id}`}>{user.name}</a></span>
                            <button className='sizeBtn'>{user.ROI}</button>
                        </div>
                    )
                })}
            {/* <div className='rowUser'>
                <img className='avatar' src={avatar1} alt='Avatar'/>
                <span ><a className='userTop' style={ {marginLeft: '-90px'}} href='#'>{users.userName}</a></span>
                <button className='sizeBtn'>+99.2%</button>
            </div>

            <div className='rowUser'>
                <img className='avatar' src={avatar2} alt='Avatar'/>
                <span><a className='userTop' style={ {marginLeft: '-50px'}} href='#'>SecureFX Trader Cradle</a></span>
                <button className='sizeBtn'>+44.2%</button>
            </div>

            <div className='rowUser'>
                <img className='avatar' src={avatar3} alt='Avatar'/>
                <span><a className='userTop' style={ {marginLeft: '-100px'}} href='#'>SwissWay</a></span>
                <button className='sizeBtn'>+256.4%</button>
            </div>

            <div className='rowUser' style={{borderBottom:'none'}}>
                <img className='avatar' src={avatar4} alt='Avatar'/>
                <span><a className='userTop' style={ {marginLeft: '-100px'}} href='#'>investLong</a></span>
                <button className='sizeBtn'>+12.7%</button>
                
            </div> */}
        </div>
    </> );
}
 
export default Card;