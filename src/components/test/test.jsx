import "./leader.css";
import Profile from "../../components/profile/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useContext, useState } from "react";
import LeaderContext from "../../context/leader";
import { Routes, Route } from "react-router-dom";
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
  
  const [selectedComponent, setSelectedComponent] = useState(null);
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
             <FontAwesomeIcon icon={faAward} />
             <FontAwesomeIcon icon={faWandMagicSparkles} />
            </div>
             
             <div className="risk">
                 <h5>{`Risk ${currentUser.risk}`}</h5>
                
             <Progress />
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
            <button>
              <FontAwesomeIcon icon={faStar} />
              <span>Add To Watch List</span>
            </button>
          </div>

          <section className="performanceSection">
            <div className="performance">
            <div className="leadNav">
            <div>
      <ul>
        <li onClick={() => handleLiClick('overView')}>overView </li>
        <li onClick={() => handleLiClick('Stats')}>Stats</li>
        {/* افزودن li های دیگر به تعداد کامپوننت‌های موردنظر */}
      </ul>
      <div className="compo">
        {/* نمایش کامپوننت انتخاب شده */}
        {selectedComponent === 'overView' && <overView />}
        {selectedComponent === 'Stats' && <Stats />}
        {/* افزودن قسمت‌های دیگر بر اساس کامپوننت‌های موردنظر */}
      </div>
    </div>
            </div>
            <div className="compo"></div>
         
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Leader;
