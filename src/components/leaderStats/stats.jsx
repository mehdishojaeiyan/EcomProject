import { ChartPnL, options } from "./chartPnL";
import LeaderContext from "../../context/leader";
import "./stats.css";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarWeek,
  faStopwatch,
  faUserCheck,
  faArrowUpWideShort,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import ETH from "../../assets/image/ETHUSD.svg";
import LTC from "../../assets/image/LTCUSD.svg";
import XRP from "../../assets/image/XRPUSD.svg";
import { Chart as ChartJS, ArcElement,Tooltip,  Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useParams } from "react-router-dom";


ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = () => {
  const {id} = useParams();
  const leaderContext = useContext(LeaderContext);
  const currentUser = leaderContext.leader.find((user) => user.id === parseInt(id));
  if (!currentUser) {
    return <p>کاربر پیدا نشد!</p>;
  }
  const eth = currentUser.ethChart;
  const ltc = currentUser.ltcChart;
  const xrp = currentUser.xrpChart;

  const dataXRP = {
    datasets: [
      {
        data: [xrp, 100 - xrp],
        backgroundColor: ["#16FF00", "gray"],
      },
    ],
  };
  const dataLTC = {
    datasets: [
      {
        data: [ltc, 100 - ltc],
        backgroundColor: ["#16FF00", "gray"],
      },
    ],
  };
  const dataETH = {
    datasets: [
      {
        data: [eth, 100 - eth],
        backgroundColor: ["#16FF00", "gray"],
      },
    ],
  };
  const options = {};
  return (
    <>
      <div className="stats">
        <div className="main">
          <h4>Performance</h4>
          <ChartPnL />
          <div className="additionalInfo ">
            <div className="additional mt-2">
              <FontAwesomeIcon className="font mb-2" icon={faCalendarWeek} />
              <span>{currentUser.tradePerWeek}</span>
              <p>Trades Per Week</p>
            </div>

            <div className="additional mt-2">
              <FontAwesomeIcon className="font mb-2" icon={faStopwatch} />
              <span>{currentUser.AVGHoldingTime}</span>
              <p>AVG. Holding Time</p>
            </div>

            <div className="additional mt-2">
              <FontAwesomeIcon className="font mb-2" icon={faUserCheck} />
              <span>{currentUser.ActiveSince}</span>
              <p>Active Since</p>
            </div>

            <div className="additional mt-2">
              <FontAwesomeIcon
                className="font mb-2"
                icon={faArrowUpWideShort}
              />
              <span>{currentUser.profitableWeeks}</span>
              <p>Profitable Weeks</p>
            </div>
          </div>
        </div>
        <div className="sideBox">
          <div className="chartDescription">
            <span>Realised Profit</span>
            <p>{currentUser.realisedProfit}</p>
            <span>Profitable Trades</span>
            <p>{currentUser.profitableTrades}</p>
            <span>Total Trades</span>
            <p>{currentUser.totalTrades}</p>
          </div>

          <div className="frequentlyTraded mt-4">
            <p>Frequently Traded</p>

            <div className="frequTrade">
              <div className="frequImg mt-2 mb-2">
                <img src={XRP} alt="" />
                <span>XRP</span>
              </div>
              <div className="frequAVG mt-3">
                <span>
                  AVG.Profit{" "}
                  <span style={{ color: "#16FF00" }}>
                    {currentUser.xrpAVGprofit}{" "}
                    <FontAwesomeIcon icon={faArrowUp} />
                  </span>
                </span>
                <span>
                  AVG.Loss &nbsp;{" "}
                  <span style={{ color: "red" }}>
                    {" "}
                    {currentUser.xrpAVGloss}{" "}
                    <FontAwesomeIcon icon={faArrowDown} />
                  </span>
                </span>
              </div>
              <div className="frequPercent mt-2">
                <div style={{ width: "30%" }}>
                  <Doughnut data={dataXRP} options={options}></Doughnut>
                </div>
                <div className="frequPercentProfitable mt-1">
                  <span style={{ color: "black" }}>
                    {currentUser.xrpProfitable}
                  </span>
                  <span>PROFITABLE</span>
                </div>
              </div>
            </div>
            <div className="frequTrade">
              <div className="frequImg mt-2 mb-2">
                <img src={LTC} alt="" />
                <span>LTC</span>
              </div>

              <div className="frequAVG mt-3">
                <span>
                  AVG.Profit{" "}
                  <span style={{ color: "#16FF00" }}>
                    {currentUser.ltcAVGprofit}{" "}
                    <FontAwesomeIcon icon={faArrowUp} />
                  </span>
                </span>
                <span>
                  AVG.Loss &nbsp;{" "}
                  <span style={{ color: "red" }}>
                    {" "}
                    {currentUser.ltcAVGloss}{" "}
                    <FontAwesomeIcon icon={faArrowDown} />
                  </span>
                </span>
              </div>
              <div className="frequPercent mt-2">
                <div style={{ width: "30%" }}>
                  <Doughnut data={dataLTC} options={options}></Doughnut>
                </div>
                <div className="frequPercentProfitable mt-1">
                  <span style={{ color: "black" }}>
                    {currentUser.ltcProfitable}
                  </span>
                  <span>PROFITABLE</span>
                </div>
              </div>
            </div>
            <div className="frequTrade">
              <div className="frequImg mt-2 mb-2">
                <img src={ETH} alt="" />
                <span>ETH</span>
              </div>
              <div className="frequAVG mt-3">
                <span>
                  AVG.Profit{" "}
                  <span style={{ color: "#16FF00" }}>
                    {currentUser.ethAVGprofit}{" "}
                    <FontAwesomeIcon icon={faArrowUp} />
                  </span>
                </span>
                <span>
                  AVG.Loss &nbsp;{" "}
                  <span style={{ color: "red" }}>
                    {" "}
                    {currentUser.ethAVGloss}{" "}
                    <FontAwesomeIcon icon={faArrowDown} />
                  </span>
                </span>
              </div>
              <div className="frequPercent mt-2">
                <div style={{ width: "30%" }}>
                  <Doughnut data={dataETH} options={options}></Doughnut>
                </div>
                <div className="frequPercentProfitable mt-1">
                  <span style={{ color: "black" }}>
                    {currentUser.ethProfitable}
                  </span>
                  <span>PROFITABLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
