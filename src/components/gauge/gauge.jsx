import GaugeComponent from 'react-gauge-component'

import { useParams } from 'react-router-dom';

import './gauge.css'


const Gauge = () => {
    

const {id} = useParams();

    return ( <>
    <div className="gaugeBigbox p-5">
        <h1 style={{fontSize:'4em'}}>{id}</h1>
       
    <p className='h2 mt-5' style={{fontSize:'3em'}}>Signal</p>
    <div className='gauge mb-5'>
    <GaugeComponent
  arc={{
    subArcs: [
      {
        limit: 20,
        color: '#EA4228',
        showTick: true
      },
      {
        limit: 40,
        color: '#F58B19',
        showTick: true
      },
      {
        limit: 60,
        color: '#F5CD19',
        showTick: true
      },
      {
        limit: 100,
        color: '#5BE12C',
        showTick: true
      },
    ]
  }}
  value={Math.floor(Math.random()*100)}
/>

    </div>
        <p className='h2 p-3 mt-5'>Dependencies</p>
        <div className="allGauge">
        <div className='gauge mb-4'>
        <GaugeComponent
  arc={{
    subArcs: [
      {
        limit: 20,
        color: '#EA4228',
        showTick: true
      },
      {
        limit: 40,
        color: '#F58B19',
        showTick: true
      },
      {
        limit: 60,
        color: '#F5CD19',
        showTick: true
      },
      {
        limit: 100,
        color: '#5BE12C',
        showTick: true
      },
    ]
  }}
  value={Math.floor(Math.random()*100)}
/>
<p className="h2">Volume Growth</p>
    </div>
    <div className='gauge mb-4'>
    <GaugeComponent
  arc={{
    subArcs: [
      {
        limit: 20,
        color: '#EA4228',
        showTick: true
      },
      {
        limit: 40,
        color: '#F58B19',
        showTick: true
      },
      {
        limit: 60,
        color: '#F5CD19',
        showTick: true
      },
      {
        limit: 100,
        color: '#5BE12C',
        showTick: true
      },
    ]
  }}
  value={Math.floor(Math.random()*100)}
/>
<p className="h2">ESP Trend</p>
    </div>
    <div className='gauge'>
    <GaugeComponent
  arc={{
    subArcs: [
      {
        limit: 20,
        color: '#EA4228',
        showTick: true
      },
      {
        limit: 40,
        color: '#F58B19',
        showTick: true
      },
      {
        limit: 60,
        color: '#F5CD19',
        showTick: true
      },
      {
        limit: 100,
        color: '#5BE12C',
        showTick: true
      },
    ]
  }}
  value={Math.floor(Math.random()*100)}
/>
<p className="h2">Commodity Corr</p>
    </div>
    <div className='gauge'>
    <GaugeComponent
  arc={{
    subArcs: [
      {
        limit: 20,
        color: '#EA4228',
        showTick: true
      },
      {
        limit: 40,
        color: '#F58B19',
        showTick: true
      },
      {
        limit: 60,
        color: '#F5CD19',
        showTick: true
      },
      {
        limit: 100,
        color: '#5BE12C',
        showTick: true
      },
    ]
  }}
  value={Math.floor(Math.random()*100)}
/>
<p className="h2">Month Average</p>
    </div>
    <div className='gauge'>
    <GaugeComponent
  arc={{
    subArcs: [
      {
        limit: 20,
        color: '#EA4228',
        showTick: true
      },
      {
        limit: 40,
        color: '#F58B19',
        showTick: true
      },
      {
        limit: 60,
        color: '#F5CD19',
        showTick: true
      },
      {
        limit: 100,
        color: '#5BE12C',
        showTick: true
      },
    ]
  }}
  value={Math.floor(Math.random()*100)}
/>
<p className="h2">News</p>
    </div>
    <div className='gauge'>
    <GaugeComponent
  arc={{
    subArcs: [
      {
        limit: 20,
        color: '#EA4228',
        showTick: true
      },
      {
        limit: 40,
        color: '#F58B19',
        showTick: true
      },
      {
        limit: 60,
        color: '#F5CD19',
        showTick: true
      },
      {
        limit: 100,
        color: '#5BE12C',
        showTick: true
      },
    ]
  }}
  value={Math.floor(Math.random()*100)}
/>
<p className="h2">Signal</p>
    </div>
    </div>
    
    </div>
    </> );
}
 
export default Gauge;


