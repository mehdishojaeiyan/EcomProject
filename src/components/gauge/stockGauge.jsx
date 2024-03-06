
import GaugeComponent from "react-gauge-component";
import "./gauge.css";
import SwitchGauge from "./switchgauge";
import { useLocation } from "react-router-dom";
import GaugeChart from "./gaugeChart";

const generateRandomNumber = () => {
    const randomNumber = (Math.random() * 2 - 1).toFixed(4);
    return randomNumber;
  };
  const randomNumber = generateRandomNumber();
  const israndomNumberPositive = randomNumber >= 0;
  const randomNumberPrecentage = israndomNumberPositive
    ? `+${Math.random().toFixed(2)}`
    : -Math.random().toFixed(2);
  

const StockGauge = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const data = searchParams.get("data")
    ? JSON.parse(decodeURIComponent(searchParams.get("data")))
    : null;

  console.log(data);
  return (
    <>
      <div className="gaugeBigbox p-5">
        <h2 style={{ fontSize: "3em" }}>{data.label} </h2>
        <span style={{ fontSize: "3em", fontWeight: "bolder" }}>
          {data.price}{" "}
        </span>
        <span  
          style={{ fontSize: "2em",
          fontWeight: "bolder",
            color: randomNumber >= 0 ? "green" : "red",
          }}
        >
          {randomNumber >= 0 ? "+" : "-"} {Math.abs(randomNumber)}
        </span>
        <span
          style={{ fontSize: "2em",
          fontWeight: "bolder",
            color: randomNumber >= 0 ? "green" : "red",
          }}
        >
           ({randomNumberPrecentage}%)
        </span>
        <div className="gaugeInfo">
        <div className="mt-5" >
          <GaugeChart />
        </div>
        <div className="mt-2 p-5">
          <p className="currencyInfoPTag p-1"><span>Open</span> <span>{data.open}</span></p>
          <p className="currencyInfoPTag p-1"><span>Bid</span><span>{data.bid}</span></p>
          {/* <p className="currencyInfoPTag p-1"><span>Market Cap</span><span>{data.market_cap}</span></p> */}
          <p className="currencyInfoPTag p-1"><span>Volume</span><span>{data.volume}</span></p>
        </div>
        </div>
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
              <SwitchGauge />
            </div>
            <p className="mt-3 xup">X UP 1</p>
          </div>
          <div className="gaugeSwitchLbox">
            <div className="gaugeSwitchbox">
              <SwitchGauge size="small" />
            </div>
            <p className="mt-3 xup">X UP 2</p>
          </div>
          <div className="gaugeSwitchLbox">
            <div className="gaugeSwitchbox">
              <SwitchGauge />
            </div>
            <p className="mt-3 xup">X UP 3</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockGauge;
