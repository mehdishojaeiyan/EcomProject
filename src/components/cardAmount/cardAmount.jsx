import "./cardAmount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import LeaderContext from "../../context/leader";
import { Link } from "react-router-dom";

const CardAmount = () => {
  const leaderContext = useContext(LeaderContext);
  const leaders = leaderContext.leader.slice(10, 14);
  return (
    <>
      <div className="card">
        <div className="title">
          <span style={{ fontSize: "large" }}>Amount Copying</span>
          <Link to={`/topperforming`}>
            <button className="iconBtn">
              <FontAwesomeIcon id="iconCard" icon={faArrowRight} />
            </button>{" "}
          </Link>
        </div>

        {leaders.map((user) => {
          return (
            <div className="rowUser">
              <a href={`/leader/${user.id}`}>
                {" "}
                <img className="avatar" src={user.avatar} alt="Avatar" />
              </a>
              <span>
                <a className="userTop" href={`/leader/${user.id}`}>
                  {user.name}
                </a>
              </span>
              <button className="sizeBtn">{user.ROI}</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardAmount;
