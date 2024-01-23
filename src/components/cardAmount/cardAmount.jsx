import './cardAmount.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import avatar5 from '../../assets/image/avatar5.webp';
import avatar9 from '../../assets/image/avatar9.jpg';
import avatar7 from '../../assets/image/avatar7.jpg';
import avatar8 from '../../assets/image/avatar8.jpg';

const CardAmount = () => {

    const [users,setUsers] = useState([
        {id:1, userName : 'ReVeR273',roi:'+147.9%',image:avatar5},
        {id:2, userName:'Fire Gc',roi:'+63.8%',image:avatar9 },
        {id:3, userName:'AlpineFx', roi:'+56.0%',image:avatar7},
        {id:4, userName:'Deepsecret',roi:'+46.4%',image:avatar8},]
    )

    return ( <>
        <div className='card'>
                <div className='title'>
                    <span style={{fontSize:'large'}}>Amount Copying</span>
                    <button className='iconBtn'><FontAwesomeIcon id="iconCard" icon={faArrowRight} /></button>
                </div>
                {console.log(users)}
                {users.map(user=>{
                    return (
                        <div className='rowUser'>
                            <img className='avatar' src={user.image} alt='Avatar'/>
                            <span ><a className='userTop'  href='#'>{user.userName}</a></span>
                            <button className='sizeBtn'>{user.roi}</button>
                        </div>
                    )
                })}
            {/* <div className='rowUser'>
                <img className='avatar' src={avatar1} alt='Avatar'/>
                <span ><a className='userTop' style={ {marginLeft: '-90px'}} href='#'>{users.userName}</a></span>
                <button className='sizeBtn'>+99.2%</button>
            </div>

            <div className='rowUser'>
                <img className='avatar' src={avatar2} alt='Avatar'/>
                <span><a className='userTop' style={ {marginLeft: '-50px'}} href='#'>SecureFX Trader Cradle</a></span>
                <button className='sizeBtn'>+44.2%</button>
            </div>

            <div className='rowUser'>
                <img className='avatar' src={avatar3} alt='Avatar'/>
                <span><a className='userTop' style={ {marginLeft: '-100px'}} href='#'>SwissWay</a></span>
                <button className='sizeBtn'>+256.4%</button>
            </div>

            <div className='rowUser' style={{borderBottom:'none'}}>
                <img className='avatar' src={avatar4} alt='Avatar'/>
                <span><a className='userTop' style={ {marginLeft: '-100px'}} href='#'>investLong</a></span>
                <button className='sizeBtn'>+12.7%</button>
                
            </div> */}
        </div>
    </> );
}
 
export default CardAmount;