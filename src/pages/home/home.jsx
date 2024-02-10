import "./home.css";
import React from "react";
import homeTrade from "../../assets/image/homeTrade2.jpeg";

const Home = () => {
  return (
    <>
      <div className="homeContainer ">
        <div className="headHome mt-3 mb-3">
          <div className="sloganDivImg">
            <img className="sloganImg" src={homeTrade} alt="" />
          </div>
          <div className="sloganH1">
            {" "}
            <h2>
              “Smart Trading Starts Here!”
              <h2 className="mt-5">
                “Choose Your Strategy, Trade Like a Pro!”
              </h2>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
