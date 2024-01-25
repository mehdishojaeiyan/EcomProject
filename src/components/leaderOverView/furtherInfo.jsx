import LeaderContext from "../../context/leader";
import { useContext, useState } from 'react';
import "./furtherInfo.css"

import { useParams } from "react-router-dom";





const FurtherInfo = () => {
    const leaderContext= useContext(LeaderContext)

    const {id} = useParams();
    const currentUser = leaderContext.leader.find((user) => user.id === parseInt(id));
    if (!currentUser) {
      return <p>کاربر پیدا نشد!</p>;
    }
    return ( <>
    <div className="further">
        <div className="furtherBox">
            <span>Trades</span><span>{currentUser.trades}</span>
        <span className="mt-3 mb-2">Profit</span><span>{currentUser.profit}</span></div>

        <div className="furtherBox">
            <span>Winning</span><span>{currentUser.winning}</span>
        <span className="mt-3 mb-2">RecommendedMinInvestment</span><span>{currentUser.recommendedMinInvestment}</span></div>

        <div className="furtherBox">
            <span>MaxOpenTrades</span><span>{currentUser.maxOpenTrades}</span>
        <span className="mt-3 mb-2">MaxDrowDown</span><span>{currentUser.maxDrowDown}</span></div>

        <div className="furtherBox br">
            <span>AvgProfit</span><span>{currentUser.avgProfit}</span>
        <span className="mt-3 mb-2">AvgTradeWeek</span><span>{currentUser.avgTradeWeek}</span></div>

    </div>
    </> );
}
 
export default FurtherInfo;