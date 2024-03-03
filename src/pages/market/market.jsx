

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

  return (<>
    <div className="market p-4">
      <div className="marketMenu mb-5"><a href="#forex">forex</a></div>
      <h1 style={{ fontSize: "4em" }}>Crypto</h1>
      <div className="mainCrypto">
        <Crypto />
        <div className="  whatIsCrypto">
          <div className="whatIsCryptoChild1">
            <p className="h4 mt-2">What is cryptocurrency?</p>
            <img
              className="mt-5"
              src={cryptoLogo}
              style={{ width: "30%" }}
              alt=""
            />
            <div className="whatIsCryptoChild2">
              <p className=" p-2">
                Cryptocurrency is a digital payment system that doesn't rely on
                banks to verify transactions. It’s a peer-to-peer system that
                can enable anyone anywhere to send and receive payments. Instead
                of being physical money carried around and exchanged in the real
                world, cryptocurrency payments exist purely as digital entries
                to an online database describing specific transactions. When you
                transfer cryptocurrency funds, the transactions are recorded in
                a public ledger. Cryptocurrency is stored in digital wallets.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 style={{fontSize:"4em"}} className='mt-4 p-4' id="forex">Forex</h1>
      <div className="mainForex" >
      <Forex />
      <div className=" whatIsForex">
        <div className="whatIsForexChild1">
          <p className="h4 mt-2">What is Forex Trading?</p>
          <img className="mt-5" src={fxLogo} style={{ width: "30%" }} alt="" />
        
        <div className="whatIsForexChild2">
          <p className=" p-2">
            Forex (FX) market is a global electronic network for currency
            trading. It has no central physical location, yet the forex market
            is the largest, most liquid market in the world by trading volume,
            with trillions of dollars changing hands every day. Most of the
            trading is done through banks, brokers, and financial institutions.
          </p>
        </div></div>
      </div>
      
      </div>
      <p className="p-3 mt-3 lead">
        <a href="forexExchengeRates">View All</a>
      </p>
      <h1>Commoodities</h1>
      <div className="mt-5 p-5" style={{ border: "1px solid lightGray" }}>
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
    </div>
    </>);
};

export default Market;
