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

ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = () => {
  const leaderContext = useContext(LeaderContext);
  const eth = leaderContext.leader.ethChart;
  const ltc = leaderContext.leader.ltcChart;
  const xrp = leaderContext.leader.xrpChart;

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
              <span>{leaderContext.leader.tradePerWeek}</span>
              <p>Trades Per Week</p>
            </div>

            <div className="additional mt-2">
              <FontAwesomeIcon className="font mb-2" icon={faStopwatch} />
              <span>{leaderContext.leader.AVGHoldingTime}</span>
              <p>AVG. Holding Time</p>
            </div>

            <div className="additional mt-2">
              <FontAwesomeIcon className="font mb-2" icon={faUserCheck} />
              <span>{leaderContext.leader.ActiveSince}</span>
              <p>Active Since</p>
            </div>

            <div className="additional mt-2">
              <FontAwesomeIcon
                className="font mb-2"
                icon={faArrowUpWideShort}
              />
              <span>{leaderContext.leader.profitableWeeks}</span>
              <p>Profitable Weeks</p>
            </div>
          </div>
        </div>
        <div className="sideBox">
          <div className="chartDescription">
            <span>Realised Profit</span>
            <p>{leaderContext.leader.realisedProfit}</p>
            <span>Profitable Trades</span>
            <p>{leaderContext.leader.profitableTrades}</p>
            <span>Total Trades</span>
            <p>{leaderContext.leader.totalTrades}</p>
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
                    {leaderContext.leader.xrpAVGprofit}{" "}
                    <FontAwesomeIcon icon={faArrowUp} />
                  </span>
                </span>
                <span>
                  AVG.Loss &nbsp;{" "}
                  <span style={{ color: "red" }}>
                    {" "}
                    {leaderContext.leader.xrpAVGloss}{" "}
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
                    {leaderContext.leader.xrpProfitable}
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
                    {leaderContext.leader.ltcAVGprofit}{" "}
                    <FontAwesomeIcon icon={faArrowUp} />
                  </span>
                </span>
                <span>
                  AVG.Loss &nbsp;{" "}
                  <span style={{ color: "red" }}>
                    {" "}
                    {leaderContext.leader.ltcAVGloss}{" "}
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
                    {leaderContext.leader.ltcProfitable}
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
                    {leaderContext.leader.ethAVGprofit}{" "}
                    <FontAwesomeIcon icon={faArrowUp} />
                  </span>
                </span>
                <span>
                  AVG.Loss &nbsp;{" "}
                  <span style={{ color: "red" }}>
                    {" "}
                    {leaderContext.leader.ethAVGloss}{" "}
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
                    {leaderContext.leader.ethProfitable}
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
