import ProgressBar from 'react-bootstrap/ProgressBar';
import './progressBar.css'

function Progress({risk}) {
  return (
    <ProgressBar className='bg'  >
      <ProgressBar className='bg-risk' now={risk*10} key={1} />
      <button className='rangBtn'>{risk}</button>
    </ProgressBar>
  );
}

export default Progress;