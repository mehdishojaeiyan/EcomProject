import GaugeComponent from "react-gauge-component";
import { useParams } from "react-router-dom";
import "./gauge.css";
import success from "../../assets/image/success-icon.png";
import incorrect from "../../assets/image/incorrect-icon.png";

const Gauge = () => {
  const { id } = useParams();

  return (
    <>
      <div className="gaugeBigbox p-5">
        <h1 style={{ fontSize: "4em" }}>{id}</h1>

        <p className="h2 p-3 mt-5">Metric</p>
        <div className="allGauge mb-5">
          <div className="gauge mb-4">
            <GaugeComponent
              arc={{
                subArcs: [
                  {
                    limit: 20,
                    color: "#EA4228",
                    showTick: true,
                  },
                  {
                    limit: 40,
                    color: "#F58B19",
                    showTick: true,
                  },
                  {
                    limit: 60,
                    color: "#F5CD19",
                    showTick: true,
                  },
                  {
                    limit: 100,
                    color: "#5BE12C",
                    showTick: true,
                  },
                ],
              }}
              value={Math.floor(Math.random() * 100)}
            />
            <p className="h2">Volume Growth</p>
          </div>
          <div className="gauge mb-4">
            <GaugeComponent
              arc={{
                subArcs: [
                  {
                    limit: 20,
                    color: "#EA4228",
                    showTick: true,
                  },
                  {
                    limit: 40,
                    color: "#F58B19",
                    showTick: true,
                  },
                  {
                    limit: 60,
                    color: "#F5CD19",
                    showTick: true,
                  },
                  {
                    limit: 100,
                    color: "#5BE12C",
                    showTick: true,
                  },
                ],
              }}
              value={Math.floor(Math.random() * 100)}
            />
            <p className="h2">ESP Trend</p>
          </div>
          <div className="gauge">
            <GaugeComponent
              arc={{
                subArcs: [
                  {
                    limit: 20,
                    color: "#EA4228",
                    showTick: true,
                  },
                  {
                    limit: 40,
                    color: "#F58B19",
                    showTick: true,
                  },
                  {
                    limit: 60,
                    color: "#F5CD19",
                    showTick: true,
                  },
                  {
                    limit: 100,
                    color: "#5BE12C",
                    showTick: true,
                  },
                ],
              }}
              value={Math.floor(Math.random() * 100)}
            />
            <p className="h2">Commodity Corr</p>
          </div>
          <div className="gauge">
            <GaugeComponent
              arc={{
                subArcs: [
                  {
                    limit: 20,
                    color: "#EA4228",
                    showTick: true,
                  },
                  {
                    limit: 40,
                    color: "#F58B19",
                    showTick: true,
                  },
                  {
                    limit: 60,
                    color: "#F5CD19",
                    showTick: true,
                  },
                  {
                    limit: 100,
                    color: "#5BE12C",
                    showTick: true,
                  },
                ],
              }}
              value={Math.floor(Math.random() * 100)}
            />
            <p className="h2">Month Average</p>
          </div>
          <div className="gauge">
            <GaugeComponent
              arc={{
                subArcs: [
                  {
                    limit: 20,
                    color: "#EA4228",
                    showTick: true,
                  },
                  {
                    limit: 40,
                    color: "#F58B19",
                    showTick: true,
                  },
                  {
                    limit: 60,
                    color: "#F5CD19",
                    showTick: true,
                  },
                  {
                    limit: 100,
                    color: "#5BE12C",
                    showTick: true,
                  },
                ],
              }}
              value={Math.floor(Math.random() * 100)}
            />
            <p className="h2">News</p>
          </div>
          <div className="gauge">
            <GaugeComponent
              arc={{
                subArcs: [
                  {
                    limit: 20,
                    color: "#EA4228",
                    showTick: true,
                  },
                  {
                    limit: 40,
                    color: "#F58B19",
                    showTick: true,
                  },
                  {
                    limit: 60,
                    color: "#F5CD19",
                    showTick: true,
                  },
                  {
                    limit: 100,
                    color: "#5BE12C",
                    showTick: true,
                  },
                ],
              }}
              value={Math.floor(Math.random() * 100)}
            />
            <p className="h2">Signal</p>
          </div>
        </div>
        <div className="gaugeSwitch mt-5 mb-5">
          <div className="gaugeSwitchLbox">
            <div className="gaugeSwitchbox">
            {Math.floor(Math.random() * 2 + 1) === 1 ? (<>
                             <img style={{opacity:"0.3"}} src={success} alt="" />
                             <img src={incorrect} alt="" />
                             </>) : (<>
                            <img  src={success} alt="" />
                            <img style={{opacity:"0.3"}} src={incorrect} alt="" />
                            </> )}
             
            </div>
            <p className="mt-3 xup">X UP 1</p>
          </div>
          <div className="gaugeSwitchLbox">
            <div className="gaugeSwitchbox">
            {Math.floor(Math.random() * 2 + 1) === 1 ? (<>
                             <img style={{opacity:"0.3"}} src={success} alt="" />
                             <img src={incorrect} alt="" />
                             </>) : (<>
                            <img  src={success} alt="" />
                            <img style={{opacity:"0.3"}} src={incorrect} alt="" />
                            </> )}
             
            </div>
            <p className="mt-3 xup">X UP 2</p>
          </div>
          <div className="gaugeSwitchLbox">
            <div className="gaugeSwitchbox">
            {Math.floor(Math.random() * 2 + 1) === 1 ? (<>
                             <img style={{opacity:"0.3"}} src={success} alt="" />
                             <img src={incorrect} alt="" />
                             </>) : (<>
                            <img  src={success} alt="" />
                            <img style={{opacity:"0.3"}} src={incorrect} alt="" />
                            </> )}
             
            </div>
            <p className="mt-3 xup">X UP 3</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gauge;
