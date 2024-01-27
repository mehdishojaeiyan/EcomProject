import PersonalCard from "../../components/personalCard/personalCard";
import LeaderContext from "../../context/leader";
import { useContext } from "react";
import './topPerforming.css'






const TopPerforming = () => {
    const leaderContext = useContext(LeaderContext);
    return ( <><h2>Top Performing</h2>
  <div className="topLeader">
    {
          leaderContext.leader.map((leader, index)=>{
            return(
            <PersonalCard key={index} risk={leader.risk} name={leader.name} img={leader.avatar} roi={leader.ROI} copiers={leader.copiers} id={leader.id}/>
              )
          })
        }</div> 
    </> );
}
 
export default TopPerforming;