import ProgressBar from 'react-bootstrap/ProgressBar';
import './progressBar.css'

function Progress() {
  return (
    <ProgressBar className='bg'  >
      <ProgressBar className='bg-risk' now={40} key={1} />
      <button className='rangBtn'>4</button>
    </ProgressBar>
  );
}

export default Progress;