
import "./leaderCard.css"
import jonas from '../../assets/image/jonas.jpg'

function LeaderCard() {
  return (
   <>
   <div className="leadCard">
    <div className="row">
    <div className="col-3"><p className="risk">Risk 4</p></div>
    <div className="col-7"><img id="cardImg" src={jonas} alt="" /></div>
    <div className="col-2"></div>
 </div>
   </div>
   </>
  );
}

export default LeaderCard;