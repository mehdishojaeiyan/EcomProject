import jonas from "../../assets/image/jonas.jpg"
import Progress from '../progressBar/progresBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAward , faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import Description from '../readMore/readMore';
import LeaderContext from "../../context/leader";
import "./profile.css"
import { useContext } from "react";




const Profile = () => {
    const leaderContext = useContext(LeaderContext)
    return ( <>
            <div className="profile">
            
           
           <img className='proimg' src={jonas} alt="" />
            <p className='name h6'>Jonas</p>
            <div className="symbol">
            <FontAwesomeIcon icon={faAward} />
            <FontAwesomeIcon icon={faWandMagicSparkles} />
           </div>
            
            <div className="risk">
                <h5>{`Risk ${leaderContext.leader.risk}`}</h5>
               
            <Progress />
            </div>
            
            <div className="proInfo">
                <div className="proUl">
                    <li className="proLi">
                        <h6 className='mb-0'>{leaderContext.leader.winRate}</h6>
                        <span>Win Rate</span>
                    </li>
                    <li className="proLi">
                    <h6 className='mb-0'>{leaderContext.leader.ROI}</h6>
                        <span>ROI</span>
                    </li>
                    <li className="proLi">
                    <h6 className='mb-0'>{leaderContext.leader.followers}</h6>
                        <span>Fllowers</span>
                    </li>
                    <li className="proLi">
                    <h6 className='mb-0'>{leaderContext.leader.copiers}</h6>
                        <span>Copiers</span>
                    </li>
                </div>
                <div className='description'>
                    <Description/>
                </div>
            </div>
        </div>
    </> );
}
 
export default Profile;