import "./leader.css";
import Profile from "../../components/profile/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import LeadNav from "../../components/leadNav/leadNav";
import { useContext, useState } from "react";
import LeaderContext from "../../context/leader";
import { Routes, Route } from "react-router-dom";
import OverView from "../../components/leaderOverView/overView";
import Stats from "../../components/leaderStats/stats";
import Portfolio from "../../components/leaderPrtfolio/Prtfolio";
import Feed from "../../components/leaderFeed/feed";

const Leader = ({ risk }) => {
  const leaderContext = useContext(LeaderContext);

  return (
    <>
      <div className="container-fluid">
        <div className="profile">
          <Profile />
        </div>
        <div className="leadPerformace">
          <div className="leadHead">
            <button>
              <FontAwesomeIcon icon={faStar} />
              <span>Add To Watch List</span>
            </button>
          </div>
          <section className="performanceSection">
            <LeadNav />
            <div className="performance">
              <Routes>
                <Route path="/overView" element={<OverView />}></Route>
                <Route path="/stats" element={<Stats />}></Route>
                <Route path="/portfolio" element={<Portfolio />}></Route>
                <Route path="/feed" element={<Feed />}></Route>
              </Routes>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Leader;
