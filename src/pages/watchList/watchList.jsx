import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import LeaderContext from "../../context/leader";
import ChartCard from "../../components/personalCard/personalChart";
import "./watchList.css";
import { ClassNames } from "@emotion/react";
import { Icon } from "semantic-ui-react";


const WatchList = () => {
  const [watchList, setWatchList] = useState([]);
  const leaderContext = useContext(LeaderContext);

  useEffect(() => {
    const storedWatchList = JSON.parse(localStorage.getItem("watchList")) || [];
    setWatchList(storedWatchList);
  }, []);

  const removeFromWatchList = (userId) => {
    const updatedWatchList = watchList.filter((user) => user.id !== userId);
    setWatchList(updatedWatchList);
    localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
  };



  // localStorage.removeItem('watchList')


  return (
    <>
      <h2 className="p-4">Watch List</h2>
      <div className="watchCard p-4">
        {watchList.map((user) => (
          <div key={user.id} className="generalPart dd mb-3 ">
            <div className="firstLine">
              <div>
                <p className="risk">Risk{user.risk}</p>
              </div>
              <div>
                <Link to={`/leader/${user.id}`}>
                  <img
                    className="personImg"
                    src={user.avatar}
                    alt={user.name}
                  />
                </Link>
              </div>
              <div>
                <button

                  className="btn btn-outline-warning btn-sm "
                  onClick={() => removeFromWatchList(user.id)}
                >
                 <Icon  name="delete " /> 
                 {/* window minimize */}

                </button>
              </div>
            </div>
            <div className="secondLine">
              <span>
                <Link to={`/leader/${user.id}`} className="namePersonalCard">
                  {user.name}
                </Link>
              </span>
            </div>
            <div className="thirdLine">
              <span id="cardCopiers">COPIERS: {user.copiers}</span>
            </div>
            <div className="roi">
              <p title="ROI">{user.ROI}</p>
            </div>
            <div className="chartCard">
              <ChartCard />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WatchList;
