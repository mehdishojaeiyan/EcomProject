import OverViewChart from "./chart";
import FurtherInfo from "./furtherInfo";
import "./overView.css";
import { useState } from "react";
import BTC from "../../assets/image/BTCUSD.svg";
import BCH from "../../assets/image/BCHUSD.svg";
import ETH from "../../assets/image/ETHUSD.svg";
import LTC from "../../assets/image/LTCUSD.svg";
import XRP from "../../assets/image/XRPUSD.svg";

const OverView = () => {
  const [state, setState] = useState({
    btc: "2.03%",
    bch: "1.80%",
    eth: "0.05%",
    ltc: "0.35%",
    xrp: "0.60%",
    profitableWeek: "76.3%",
    returnYTD: "91.5%",
  });
  return (
    <>
      <div className="viwePerform">
        <div className="main">
          <div className="mt-4 p-2">
            <OverViewChart />
          </div>
          <div className="mt-4">
            <FurtherInfo />
          </div>
        </div>

        <div className="sideBox">
          <div className="topTraded">
            <p>Top Traded</p>
            <div className="topTrad">
              <img src={BTC} alt="" />
              <p>BTC</p>
              <span>{state.btc}</span>
            </div>
            <div className="topTrad">
              <img src={BCH} alt="" />
              <p>BCH</p>
              <span>{state.bch}</span>
            </div>
            <div className="topTrad">
              <img src={XRP} alt="" />
              <p>XRP</p>
              <span>{state.xrp}</span>
            </div>
            <div className="topTrad">
              <img src={LTC} alt="" />
              <p>LTC</p>
              <span>{state.ltc}</span>
            </div>
            <div className="topTrad">
              <img src={ETH} alt="" />
              <p>ETH</p>
              <span>{state.eth}</span>
            </div>
          </div>

          <div className="info mt-3 p-2">
            <p>
              Return YTD :<span>{state.returnYTD}</span>
            </p>

            <p>
              Profitable Weeks :<span>{state.profitableWeek}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverView;
