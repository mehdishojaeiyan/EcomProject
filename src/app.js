import ReactDOM from "react-dom";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Leader from "./pages/leader/leader";
import LeaderContext from "./context/leader";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

class App extends Component {
  state = {
    leader: {
      id: 1,
      leadName: "jonas",
      risk: 4,
      winRate: "75.12%",
      ROI: "170.5%",
      followers: 287,
      copiers: 98,
      profit: "8020$",
      realisedProfit: "USD29,854",
      trades: 768,
      profitableTrades: "89.5%",
      totalTrades: 1863,
      maxOpenTrades: 23,
      avgProfit: "0.8%",
      tradePerWeek: "4.5",
      AVGHoldingTime: "17 months",
      ActiveSince: "2/14/20",
      profitableWeeks: "69.5%",
      ethAVGprofit: "31.02%",
      ethAVGloss: "14.02%",
      ethProfitable: "78.34%",
      ethChart:78.34,
      ltcAVGprofit: "19.50%",
      ltcAVGloss: "32.70%",
      ltcProfitable: "17.80%",
      ltcChart:17.80,
      xrpAVGprofit: "13.08%",
      xrpAVGloss: "14.60%",
      xrpProfitable: "31.40%",
      xrpChart:31.40,
      winning: "(361)52.2%",
      recommendedMinInvestment: "1000$",
      maxDrowDown: "(2743$)21%",
      avgTradeWeek: 67,
    },
  };
  render() {
    return (
      <>
        <LeaderContext.Provider value={{ leader: this.state.leader }}>
          <Navbar/>
          <Routes>
                <Route path="/Leaders" element={<Leader />}></Route>
                
              </Routes>
              <Footer/>
        </LeaderContext.Provider>
      </>
    );
  }
}

export default App;
