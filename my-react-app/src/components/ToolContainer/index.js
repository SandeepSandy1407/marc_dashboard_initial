import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import Queue from '../TQmenu/Queue';


function ToolContainer(props) {
    const [queue, setQueue] = useState(false)
    const [menu,setMenu] = useState(true)
    const navigate = useNavigate()
    const QueueToggle = () =>{
        setQueue(!queue)
        setMenu(!menu)
        console.log(`toolContainer queue ${queue} and menu ${menu}`)
    }
    const toolsBar = (<div className = "tools-container">
    <div>
      <p>
        Task
      </p>
      <div className = "sec-tools-container">
      <div>
      <button className='solid-ball-queue' onClick={QueueToggle}><img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705482626/more_j1ij9s.png" alt = "queue" className = "tools-image"/>
      <p  className='menu-item-name'>Queue</p></button>
      
      </div>
      <div>
      <img src ="https://res.cloudinary.com/dg9wsic7j/image/upload/v1705483009/1_ttejhw.png" alt = "library" className = "tools-image"/>
      <p className='menu-item-name'>Library</p>
      </div>
      </div>

    </div>
    <hr/>
    <div>
      <p>
        Lane
      </p>
      <div  className = "sec-tools-container">
      <div>
      <button  className="solid-ball-queue" onClick={()=>{
navigate("/create");
}}>
      <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705483319/1_uqarhu.png" alt = "create" className = "tools-image-create"/>
      </button>
      <p className='menu-item-name'>Create</p>
      </div>
      <div>
      <img src ="https://res.cloudinary.com/dg9wsic7j/image/upload/v1705483009/1_ttejhw.png" alt = "library" className = "tools-image"/>
      <p  className='menu-item-name'>Library</p>
      </div>
      </div>
    </div>
    <hr/>
    <div>
      <p>
        Other
      </p>
      <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705483579/1_dt2bcy.png" alt = "other" className = "tools-image"/>
      <p className='menu-item-name'>Localize</p>
    </div>
  </div>) 
  return(props.trigger)? (
    <div>
        {menu && toolsBar}
        {queue && <Queue trigger = {queue}/>}
    </div>
        
  ):""
}

export default ToolContainer