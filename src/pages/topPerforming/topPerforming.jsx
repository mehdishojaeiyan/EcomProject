import PersonalCard from "../../components/personalCard/personalCard";
import LeaderContext from "../../context/leader";
import { useContext } from "react";
import './topPerforming.css'






const TopPerforming = () => {
    const leaderContext = useContext(LeaderContext);
    return ( <><h2 className="p-4">Top Performing</h2>
  <div className="topLeader p-4">
    {
          leaderContext.leader.map((leader, index)=>{
            return(<div className="topCard p-3">
            <PersonalCard key={index} risk={leader.risk} name={leader.name} img={leader.avatar} roi={leader.ROI} copiers={leader.copiers} id={leader.id}/>
            </div>  )
          })
        }</div> 
    </> );
}
 
export default TopPerforming;