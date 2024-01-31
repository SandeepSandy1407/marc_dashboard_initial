import React, {useState} from 'react'
import ToolContainer from '../ToolContainer/index.js';
import "./Queue.css"

function Queue(props) {
    const [queue, setQueue] = useState(props.trigger)
    const [menu,setMenu] = useState(false)
    const QueueToggle = () =>{
        setQueue(!queue)
        setMenu(!menu)
        console.log(`QueueContainer queue ${queue} and menu ${menu}`)
    }
    const queueContainer = (<div className = "tools-container">
          
    <nav className='nav-container-menu'>
        <button onClick={QueueToggle} className='back-buttton' >
            <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705562865/rbt1_imnray.png" alt = "back-queue" className = "action-img"/>
        </button>
        <h2>Queue</h2>
    </nav>
    <hr/>
  <div className='action-container-menu'>
    <div className='top-container-menu'>
        <div className='status-container-menu'>
            <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705563074/rbt1_u8xtqs.png" alt = "queue-active" className='additional-img'/>
            <p className='queue-status-text'>Active</p>
        </div>
        <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705563890/rbt1_nnbv75.png" alt = "queue-vertical-line" className='vertical-line-menu'/>
        <div  className='status-container-menu'>
        <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705563193/rbt1_kmcbn0.png" alt = "queue-battery"  className='additional-img'/>
            <p className='queue-status-text'>80%</p>
        </div>
    </div>
    <div className='previous-next-container'>
        <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705564083/rbt1_nxyj1n.png" alt = "queue-previous" className='action-img' />
        <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705566758/rbt1_wvuvvs.png" alt = "queue-pause" className='action-img'/>
        <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705566870/rbt1_igr4yg.png" alt = "queue-next" className='action-img'/>
    </div>
  </div>
  <div className='queue-bottom-container'>
  <ul className='queue-list-container'>
        <li className='queue-list-item'>
            <div className='Solid-color clr1'></div>
            <p className='robot-name-menu'>Path 1</p>
            <p className='queue-yellow-line'>Robot..1</p>
            <p className='queue-status-robot'>Running</p>
        </li>
        <li className='queue-list-item'>
            <div className='Solid-color clr2'></div>
            <p className='robot-name-menu'>Path 2</p>
            <p className='queue-yellow-line'>Robot..2</p>
            <p className='queue-status-robot'>Wating..</p>
        </li>
        <li className='queue-list-item'>
            <div className='Solid-color clr3'></div>
            <p className='robot-name-menu'>Path 3</p>
            <p className='queue-yellow-line'>Robot..3</p>
            <p className='queue-status-robot'>waiting..</p>
        </li>
    </ul>
    <button className='queue-add-btn'>
    <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705568718/rbt1_qkpxhi.png" className='menu-create-img' alt = "queue-btn"/>
  </button>
  </div>
  
</div>)
  return(props.trigger)? (
    <>
    {queue && queueContainer}
    {menu && <ToolContainer trigger = {menu}/>}
    </>
  ):"";
}

export default Queue