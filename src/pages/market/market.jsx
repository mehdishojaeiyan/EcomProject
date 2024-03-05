import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MArketLoading from "./crypto/cryptoLoading";
import "./market.css";
import Forex from "./forex/forex";
import fxLogo from "../../assets/image/FX_logo.png";
import cryptoLogo from "../../assets/image/cryptoLogo.png";
import Crypto from "./crypto/crypto";
import Test from "../../components/test/test";
import CrudeOilWTI from "./commodities/crudeOilWTI";
import CrudeOilBrent from "./commodities/crudeOilBrent";
import NaturalGas from "./commodities/naturalGas";
import Aluminum from "./commodities/aluminum";
import Copper from "./commodities/copper";
import Wheat from "./commodities/wheat";
import Corn from "./commodities/corn";
import Cotton from "./commodities/cotton";
import Sugar from "./commodities/sugar";
import Coffee from "./commodities/coffee";
import NYSE from "./nyse/nyse";
import NASDAQ from "./nasdaq/nasdaq";
import LSE from "./lse/lse";
import usd from "../../assets/image/usd.jpg";
import womenUsd from "../../assets/image/womenUsd.jpg";
import goldbtc from "../../assets/image/goldbtc.jpg";
import mrbtc from "../../assets/image/mrbtc.webp";
import NyseWtchPP from "./nyse/nyseWtchPP";
import NasdaqWtchPP from "./nasdaq/nasdaqWtchPP";
import LseWtchPP from "./lse/lseWtchPP";
import FwbWtchPP from "./fwb/fwbWtchPP";
import coffee from "../../assets/image/coffee.jpg";
import wheat from "../../assets/image/wheat.jpg";

const Market = () => {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              per_page: 10,
              page: 1,
            },
          }
        );
        setMarketData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("خطا در دریافت اطلاعات: ", error);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <>
      <div className="marketMenu p-2 mb-5">
        <a href="#Crypto">Crypto</a>
        <a href="#forex">forex</a>
        <a href="#Commodities">Commodities</a>
        <a href="#NYSE">NYSE</a>
        <a href="#NASDAQ">NASDAQ</a>
        <a href="#LSE">LSE</a>
        <a href="#FWB">FWB</a>
        
      </div>
      <div className="market p-4">
        <h1 className=" p-4" style={{ fontSize: "4em" }} id="Crypto">
          Crypto
        </h1>
        <div className="mainCrypto">
          <Crypto />
          <div className="  whatIsCrypto p-2">
            <div className="whatIsCryptoChild1">
              <p className="h4 mt-2">
                Bitcoin NFT NodeMonkes Sells for $1M as BTC Inches Toward $69K
              </p>
              <img
                className="mt-3"
                src={goldbtc}
                style={{ width: "45%" }}
                alt=""
              />
              <div className="whatIsCryptoChild2">
                <p className=" p-2" style={{borderBottom:"1px solid gray"}}> 
                  Bitcoin-based collections traded more volume than Ethereum
                  collections in the past 24 hours, which shows network adoption
                  as bitcoin prices inch closer to highs.
                </p>
              </div>
              <p className="h4 mt-2">
                Bitcoin Rally Leaves More Than 97% of Addresses in Profit,
                Blockchain Data Show
              </p>
              <img
                className="mt-3"
                src={mrbtc}
                style={{ width: "45%" }}
                alt=""
              />
              <div className="whatIsCryptoChild2">
                <p className=" p-2" >
                  Most bitcoin addresses bought coins at prices lower than the
                  going market rate, according to IntoTheBlock.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 style={{ fontSize: "4em" }} className="mt-4 p-4" id="forex">
          Forex
        </h1>
        <div className="mainForex">
          <Forex />
          <div className=" whatIsForex p-2">
            <div className="whatIsForexChild1">
              <p className="h4 mt-2"> US Dollar Continues to Find Buyers</p>
              <img className="mt-3" src={usd} style={{ width: "45%" }} alt="" />

              <div className="whatIsForexChild2">
                <p className=" p-2" style={{borderBottom:"1px solid gray"}}>
                  The US dollar pulled back initially against the Japanese yen
                  this week, only to find buyers on that dip to find value in
                  that move.
                </p>
              </div>
              <p className="h4 mt-2">
                Australian Dollar vs US Dollar Technical Analysis
              </p>
              <img
                className="mt-3"
                src={womenUsd}
                style={{ width: "45%" }}
                alt=""
              />

              <div className="whatIsForexChild2">
                <p className=" p-2" >
                  The Australian dollar continues to see a lot of noisy behavior
                  as we are in the midst of major resistance and support near
                  where we are.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="p-3 mt-3 lead">
          <a href="forexExchengeRates">View All</a>
        </p>
        
        <h1 style={{ fontSize: "4em" }} className="mt-5 p-4" id="#Commodities">
          Commoodities
        </h1>
        <div className="mainForex">
          <div className="mt-3">
            <div>
              <p
                className="p-4 h4"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(6,1fr)",
                  borderBottom: "1px solid gray",
                }}
              >
                <span>Name</span>
                <span>Unit</span>
                <span>Last Price</span>
                <span>Open</span>
                <span>Bid</span>
                <span>Volume</span>
              </p>
            </div>
            <CrudeOilWTI />
            <CrudeOilBrent />
            <NaturalGas />
            <Aluminum />
            <Copper />
            <Wheat />
            <Corn />
            <Cotton />
            <Sugar />
            <Coffee />
          </div>
          <div className="whatIsForex">
            <div className="whatIsForexChild1 mt-5">
              <p className="h4 p-1 mt-5">The Red Sea attacks are creating chaos in the global coffee trade</p>
              <img
                className="mt-3"
                src={coffee}
                style={{ width: "45%" }}
                alt=""
              />

              <div className="whatIsForexChild2">
                <p className=" p-2" style={{borderBottom:"1px solid gray"}}>
                  Buyers are turning down shipments from Vietnam that pass through the Red Sea, seeking supplies from Brazil instead, as prices of robusta coffee surge.
                </p>
              </div>
              <p className="h4 p-1 mt-3">Commodities round-up: Gold, wheat and oil prices gain</p>
              <img
                className="mt-3"
                src={wheat}
                style={{ width: "45%" }}
                alt=""
              />

              <div className="whatIsForexChild2">
                <p className=" p-2" >
                  A look at how oil prices, precious metals and wheat futures are performing this week.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className=" p-4" style={{ fontSize: "4em" }} id="NYSE">
          NYSE
        </h1>
        <div className="mainCrypto">
          <NYSE />
          <div className="  whatIsCrypto">
            <div className="whatIsCryptoChild1">
              <p className="h3 mt-2">People Also Watch</p>

              <div className="whatIsCryptoChild2 p-1">
                <NyseWtchPP />
              </div>
            </div>
          </div>
        </div>
        <h1 className=" p-4" style={{ fontSize: "4em" }} id="NASDAQ">
          NASDAQ
        </h1>
        <div className="mainCrypto">
          <NASDAQ />
          <div className="  whatIsCrypto">
            <div className="whatIsCryptoChild1">
              <p className="h4 mt-2">People Also Watch</p>

              <div className="whatIsCryptoChild2 p-1">
                <NasdaqWtchPP />
              </div>
            </div>
          </div>
        </div>
        <h1 className=" p-4" style={{ fontSize: "4em" }} id="LSE">
          LSE
        </h1>
        <div className="mainCrypto">
          <LSE />
          <div className="  whatIsCrypto">
            <div className="whatIsCryptoChild1">
              <p className="h4 mt-2">People Also Watch</p>

              <div className="whatIsCryptoChild2 p-1">
                <LseWtchPP />
              </div>
            </div>
          </div>
        </div>
        <h1 className=" p-4" style={{ fontSize: "4em" }} id="FWB">
          FWB
        </h1>
        <div className="mainCrypto">
          <LSE />
          <div className="  whatIsCrypto">
            <div className="whatIsCryptoChild1">
              <p className="h4 mt-2">People Also Watch</p>

              <div className="whatIsCryptoChild2 p-1">
                <FwbWtchPP />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
