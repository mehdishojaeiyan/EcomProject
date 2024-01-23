import LeaderContext from "../../context/leader";
import { useContext, useState } from 'react';
import "./furtherInfo.css"





const FurtherInfo = () => {
    const leaderContext= useContext(LeaderContext)
    return ( <>
    <div className="further">
        <div className="furtherBox">
            <span>Trades</span><span>{leaderContext.leader.trades}</span>
        <span className="mt-3 mb-2">Profit</span><span>{leaderContext.leader.profit}</span></div>

        <div className="furtherBox">
            <span>Winning</span><span>{leaderContext.leader.winning}</span>
        <span className="mt-3 mb-2">RecommendedMinInvestment</span><span>{leaderContext.leader.recommendedMinInvestment}</span></div>

        <div className="furtherBox">
            <span>MaxOpenTrades</span><span>{leaderContext.leader.maxOpenTrades}</span>
        <span className="mt-3 mb-2">MaxDrowDown</span><span>{leaderContext.leader.maxDrowDown}</span></div>

        <div className="furtherBox br">
            <span>AvgProfit</span><span>{leaderContext.leader.avgProfit}</span>
        <span className="mt-3 mb-2">AvgTradeWeek</span><span>{leaderContext.leader.avgTradeWeek}</span></div>

    </div>
    </> );
}
 
export default FurtherInfo;