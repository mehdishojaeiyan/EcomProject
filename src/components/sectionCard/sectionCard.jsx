import Card from "../card/card";
import CardAmount from '../cardAmount/cardAmount'; 
import './sectionCard.css';
import img1 from '../../assets/img/img1.webp';

const SectionCard = () => {
    return ( <>
        <div id="sectionCards">
            <div className="topCard">
                <Card/>
            </div>
            <div className="homeImg">
                <img src={img1} alt=""/>
            </div>
           <div className="topCard">
                <CardAmount/>
           </div>
        </div>
    </> );
}
 
export default SectionCard;