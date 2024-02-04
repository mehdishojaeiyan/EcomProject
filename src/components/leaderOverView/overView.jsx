import OverViewChart from "./chart";
import FurtherInfo from "./furtherInfo";
import "./overView.css";
import BTC from "../../assets/image/BTCUSD.svg";
import BCH from "../../assets/image/BCHUSD.svg";
import ETH from "../../assets/image/ETHUSD.svg";
import LTC from "../../assets/image/LTCUSD.svg";
import XRP from "../../assets/image/XRPUSD.svg";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import LeaderContext from "../../context/leader";

const OverView = () => {
  const {id} = useParams();
  const leaderContext = useContext(LeaderContext);
  const currentUser = leaderContext.leader.find((user) => user.id === parseInt(id));
  if (!currentUser) {
    return <p>کاربر پیدا نشد!</p>;
  }


  return (
    <><div className=" overViewBigBox p-4" style={{backgroundColor:" #f5f5f5"}}>
      <div className="viwePerform">
        <div className="main">
          <div className="mt-4 p-2">
            <OverViewChart />
          </div>
          <div className="mt-4">
            <FurtherInfo  />
          </div>
        </div>

        <div className="sideBox mt-4">
          <div className="topTraded">
            <p>Top Traded</p>
            <div className="topTrad">
              <img src={BTC} alt="" />
              <p>BTC</p>
              <span>{currentUser.btc}</span>
            </div>
            <div className="topTrad">
              <img src={BCH} alt="" />
              <p>BCH</p>
              <span>{currentUser.bch}</span>
            </div>
            <div className="topTrad">
              <img src={XRP} alt="" />
              <p>XRP</p>
              <span>{currentUser.xrp}</span>
            </div>
            <div className="topTrad">
              <img src={LTC} alt="" />
              <p>LTC</p>
              <span>{currentUser.ltc}</span>
            </div>
            <div className="topTrad">
              <img src={ETH} alt="" />
              <p>ETH</p>
              <span>{currentUser.eth}</span>
            </div>
          </div>

          <div className="info mt-3 p-2">
            <p>
              Return YTD :<span>{currentUser.returnYTD}</span>
            </p>

            <p>
              Profitable Weeks :<span>{currentUser.profitableWeek}</span>
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default OverView;
