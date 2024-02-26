import Slider from "../../components/slider/slider";
import SectionCard from "../../components/sectionCard/sectionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import "./leaders.css";

const Leaders = () => {
  return (
    <>
      <div className="leaders">
        <h3 className="h2">
          <FontAwesomeIcon icon={faUsers} /> Leaders
        </h3>
      </div>
      <h4 className="topPerform h2">Top Performing</h4>
      <Slider />
      <div className="mt-5 mb-5">
        <SectionCard />
      </div>
      <Slider />
    </>
  );
};

export default Leaders;
