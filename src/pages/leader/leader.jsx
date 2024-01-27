
import "./leader.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useContext, useState } from "react";
import LeaderContext from "../../context/leader";
import { useEffect } from "react";
import OverView from "../../components/leaderOverView/overView";
import Stats from "../../components/leaderStats/stats";
import Portfolio from "../../components/leaderPrtfolio/Prtfolio";
import Feed from "../../components/leaderFeed/feed";
import { useParams } from "react-router-dom";
import Progress from "../../components/progressBar/progresBar";
import {faAward , faWandMagicSparkles ,faStar } from '@fortawesome/free-solid-svg-icons';
import Description from "../../components/readMore/readMore";
import { Link,NavLink } from 'react-router-dom';


const Leader = () => {
  const leaderContext = useContext(LeaderContext);

  const [selectedComponent, setSelectedComponent] = useState("OverView");
  const handleLiClick = (componentName) => {
    setSelectedComponent(componentName);
  };
 
  const {id} = useParams();
  
  const currentUser = leaderContext.leader.find((user) => user.id === parseInt(id));
  if (!currentUser) {
    return <p>کاربر پیدا نشد!</p>;
  }


  return (
    <>
      <div className="container-fluid p-2">
        <div className="profile">
        <div className="profile1">
            
           
            <img className='proimg' src={currentUser.avatar} alt="" />
             <p className='name h6'>{currentUser.name} </p>
             <div className="symbol">
             <FontAwesomeIcon title="dasda" icon={faAward} />
             <FontAwesomeIcon icon={faWandMagicSparkles} />
            </div>
             
             <div className="proRisk">
                 <h5>{`Risk ${currentUser.risk}`}</h5>
                
             <Progress risk={currentUser.risk} />
             </div>
             
             <div className="proInfo">
                 <div className="proUl">
                     <li className="proLi">
                         <h6 className='mb-0'>{currentUser.winRate}</h6>
                         <span>Win Rate</span>
                     </li>
                     <li className="proLi">
                     <h6 className='mb-0'>{currentUser.ROI}</h6>
                         <span>ROI</span>
                     </li>
                     <li className="proLi">
                     <h6 className='mb-0'>{currentUser.followers}</h6>
                         <span>Fllowers</span>
                     </li>
                     <li className="proLi">
                     <h6 className='mb-0'>{currentUser.copiers}</h6>
                         <span>Copiers</span>
                     </li>
                 </div>
                 <div className='description'>
                     <Description/>
                 </div>
             </div>
         </div>
        </div>
        <div className="leadPerformace">
          <div className="leadHead">
            <button><Link to={`/watchList/${id}`} >
              <FontAwesomeIcon icon={faStar} />
              <span>Add To Watch List</span></Link>
            </button>
          </div>
          <section className="performanceSection">
            <div className="performance">
            <div className="leadNav">
            <ul className="nav nav-tabs">

            <li  onClick={() => handleLiClick('OverView')}><Link className="nav-link  navLi" >OverView</Link></li>
       <li  onClick={() => handleLiClick('Stats')}><Link className="nav-link  navLi" >Stats</Link></li>
       <li  onClick={() => handleLiClick('Portfolio')}><Link className="nav-link  navLi" >Portfolio</Link></li>
       <li  onClick={() => handleLiClick('Feed')}><Link className="nav-link  navLi" >Feed</Link></li>
 
</ul>
            </div>
            {selectedComponent === 'OverView' && <OverView />}
            {selectedComponent === 'Stats' && <Stats />}
            {selectedComponent === 'Portfolio' && <Portfolio />}
            {selectedComponent === 'Feed' && <Feed name={currentUser.name} />}
          
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Leader;