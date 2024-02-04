import { Link } from 'react-router-dom';
import './personalCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { useContext, useState, useEffect } from 'react';
import LeaderContext from "../../context/leader";
import ChartCard from './personalChart';

const PersonalCard = ({ name, img, roi, copiers, id, risk }) => {
  const leaderContext = useContext(LeaderContext);
  const [isAddedToWatchList, setIsAddedToWatchList] = useState(false);

  useEffect(() => {
    // بررسی اینکه آیا کاربر در Watch List قرار دارد یا خیر
    const watchList = JSON.parse(localStorage.getItem('watchList')) || [];
    const isAdded = watchList.some((user) => user.id === id);
    setIsAddedToWatchList(isAdded);
  }, [id]);

  const addToWatchList = () => {
    if (!isAddedToWatchList) {
      const currentUser = leaderContext.leader.find((user) => user.id === id);
      const watchList = JSON.parse(localStorage.getItem('watchList')) || [];
      watchList.push(currentUser);
      localStorage.setItem('watchList', JSON.stringify(watchList));
      setIsAddedToWatchList(true);
    }
  };
 

  return (
    <>
      <div className='generalPart mb-3'>
        <div className='firstLine'>
          <div><p className='risk'>Risk{risk}</p></div>
          <div><Link to={`/leader/${id}`}><img className='personImg' src={img} alt={name} /></Link></div>
          <div><Link to={`/watchList/${id}`} id='star' onClick={addToWatchList}><FontAwesomeIcon icon={faStar} /></Link></div>
        </div>
        <div className='secondLine'>
          <span><Link to={`/leader/${id}`} className='namePersonalCard'>{name}</Link></span>
        </div>
        <div className='thirdLine'>
          <span id='cardCopiers'>COPIERS: {copiers}</span>
        </div>
        <div className='roi'>
          <p title='ROI'>{roi}</p>
        </div>
        <div className='chartCard'>
          <ChartCard />
        </div>
      </div>
    </>
  );
}

export default PersonalCard;
