import './card.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import jonas from "../../assets/image/jonas.jpg"


const Card = () => {

    const [users,setUsers] = useState([
        {id:1, userName : 'Lightning-Signal',roi:'+99.2%',image:jonas},
        {id:2, userName:'SecureFX-Trader-Cradle',roi:'+44.2%',image:jonas },
        {id:3, userName:'SwissWay', roi:'+256.4%',image:jonas},
        {id:4, userName:'investLong',roi:'+12.7%',image:jonas},]
    )

    return ( <>
        <div className='card'>
                <div className='title'>
                    <span style={{fontSize:'large'}}>Top Performing 1 year</span>
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
 
export default Card;