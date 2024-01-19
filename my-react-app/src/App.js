import PopupRbt1 from './components/PopupRbt1';
import PopupRbt2 from './components/PopupRbt2';
import PopupRbt3 from './components/PopupRbt3';
import Queue from './components/menu/Queue';
import './App.css';
import React, { useState } from 'react';


function App() {

const [is_menu,setMenu] = useState(false)
const [robo1,setRobo1] = useState(false)
const [robo2,setRobo2] = useState(false)
const [robo3,setRobo3] = useState(false)
const [popup1, setPopup1] = useState(false)
const [popup2, setPopup2] = useState(false)
const [popup3, setPopup3] = useState(false)
const [queue,setQueue] = useState(false)

//tool Container
const toolContainer = (
  <div className = "tools-container">
          <div>
            <p>
              Task
            </p>
            <div className = "sec-tools-container">
            <div>
            <button className='solid-ball-queue' onClick={()=>(setQueue(!queue),
              setMenu(!is_menu))}><img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705482626/more_j1ij9s.png" alt = "queue" className = "tools-image"/>
            <p  className='menu-item-name'>queue</p></button>
            
            </div>
            <div>
            <img src ="https://res.cloudinary.com/dg9wsic7j/image/upload/v1705483009/1_ttejhw.png" alt = "library" className = "tools-image"/>
            <p className='menu-item-name'>library</p>
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
            <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705483319/1_uqarhu.png" alt = "create" className = "tools-image-create"/>
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
        </div>
)
// Menu's Queue Container
const QueueContainer = (<Queue setQueue = {setQueue} trigger = {queue} setMenu = {setMenu}></Queue>)
//Ax Clean Container
const displayRobo1 = (
  <div className='robot-prop-container'>
    <div className='property-heading1'>
    <h1 className='Robot-name'>Ax Clean</h1>
    <button className='solid-ball rb-clr1'></button>
    </div>
    <div className='properties-list-container'>
     <ul className='propety-container'>
      <li>
        Name
      </li>
      <li>Status</li>
      <li>Battery</li>
      <li>Type</li>
      <li>Task</li>
     </ul>
     <ul className='value-container'>
      <li>Robot 1</li>
      <li>Running</li>
      <li>90%</li>
      <li>Disinfection</li>
      <li>Queue_1</li>
     </ul>
    </div>
    <button className='Abort-btn r1'>Abort</button>
    <button className='Select-btn rb-clr1'>Select</button>
  </div>
)

//Ax Dolly Container
const displayRobo2 = (
  <div  className='robot-prop-container'>
    <div className='property-heading1'>
    <h1>Ax Dolly</h1>
    <button className='solid-ball rb-clr2'></button>
    </div>
    <div className='properties-list-container'>
     <ul className='propety-container'>
      <li>
        Name
      </li>
      <li>Status</li>
      <li>Battery</li>
      <li>Type</li>
      <li>Task</li>
     </ul>
     <ul className='value-container'>
      <li>Robot 2</li>
      <li>Running</li>
      <li>90%</li>
      <li>Disinfection</li>
      <li>Queue_2</li>
     </ul>
    </div>
    <button className='Abort-btn r2'>Abort</button>
    <button className='Select-btn rb-clr2'>Select</button>
  </div>
)

// Ax Astro Container
const displayRobo3 = (
  <div className='robot-prop-container'>
    <div className='property-heading1'>
    <h1>Ax Astro</h1>
    <button className='solid-ball rb-clr3'></button>
    </div>
    <div className='properties-list-container'>
     <ul className='propety-container'>
      <li>
        Name
      </li>
      <li>Status</li>
      <li>Battery</li>
      <li>Type</li>
      <li>Task</li>
     </ul>
     <ul className='value-container'>
      <li>Ax Astro</li>
      <li>Running</li>
      <li>90%</li>
      <li>Disinfection</li>
      <li>Queue_3</li>
     </ul>
    </div>
    <button className='Abort-btn r3'>Abort</button>
    <button className='Select-btn rb-clr3'>Select</button>
  </div>
)
//Main Code To Display
  return (
    //top container
    <div className="App">
      {/* head container*/}
      <header className="App-header">
        {/* nav bar conatiner*/}
        <nav className = "nav-container">
          <button className = "menu-button" onClick={()=> (setMenu(!is_menu),setQueue(false))}>
          <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705481024/application_iksujn.png" alt = "menu" className = "menu-image"/>
          </button>
          <h1 className = "nav-head">Homepage</h1>
          <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705484515/sort_dxflam.png" alt = "more" className = "menu-image"/>
        </nav>
      </header>
      <div className = "content-container">
        {
          is_menu&& toolContainer}
          {
          queue&&QueueContainer
        }
        <div className = "map-container"> 
          
          <div className='robo1' onMouseEnter={()=>setRobo1(!robo1)} onMouseLeave={() =>setRobo1(!robo1)}>
          <div className='robot-name-container'>
            <button className='solid-ball rb-clr1'></button>
          <p  className='name-style'>Ax Clean</p>
          </div>
          <p  className='name-style'>90%</p>
          <button onClick={() =>setPopup1(!popup1)} className = "solid-ball">
            <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705581154/rbt1_jbtrtd.png" alt="robo-btn" className='menu-image-rbt'/>
          </button>
          <PopupRbt1 trigger = {popup1} setPopup1 = {setPopup1}>
          <div className='robot-prop-container-popup'>
    <div className='property-heading1'>
    <h1>Ax Clean</h1>
    <button className='solid-ball rb-clr1'></button>
    </div>
    <div className='properties-list-container'>
     <ul className='propety-container'>
      <li>
        Name
      </li>
      <li>Status</li>
      <li>Battery</li>
      <li>Type</li>
      <li>Task</li>
     </ul>
     <ul className='value-container'>
      <li>Ax Clean</li>
      <li>Running</li>
      <li>90%</li>
      <li>Disinfection</li>
      <li>Queue_1</li>
     </ul>
    </div>
    <button className='Abort-btn r1'>Abort</button>
    <button className='Select-btn rb-clr1'>Select</button>
  </div>
          </PopupRbt1>
            {
              robo1&&displayRobo1
            }
            
          </div>
          <div className='robo2' onMouseEnter={()=>setRobo2(!robo2)} onMouseLeave={() =>setRobo2(!robo2)}>
          <div className='robot-name-container'>
            <button className='solid-ball rb-clr2'></button>
          <p  className='name-style'>Ax Dolly</p>
          </div>
          <p  className='name-style'>90%</p>
          <button onClick={() =>setPopup2(!popup2)} className = "solid-ball">
            <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705581048/rbt1_crs087.png" alt="robo-btn" className='menu-image-rbt'/>
          </button>
          <PopupRbt2 trigger = {popup2} setPopup2 = {setPopup2}>
          <div  className='robot-prop-container-popup'>
    <div className='property-heading1'>
    <h1>Ax Dolly</h1>
    <button className='solid-ball rb-clr2'></button>
    </div>
    <div className='properties-list-container'>
     <ul className='propety-container'>
      <li>
        Name
      </li>
      <li>Status</li>
      <li>Battery</li>
      <li>Type</li>
      <li>Task</li>
     </ul>
     <ul className='value-container'>
      <li>Ax Dolly</li>
      <li>Running</li>
      <li>90%</li>
      <li>Disinfection</li>
      <li>Queue_2</li>
     </ul>
    </div>
    <button className='Abort-btn r2'>Abort</button>
    <button className='Select-btn rb-clr2'>Select</button>
  </div>
          </PopupRbt2>
            {robo2&&displayRobo2}
          </div>
          <div className='robo3' onMouseEnter={()=>setRobo3(!robo2)} onMouseLeave={() =>setRobo3(!robo3)}>
          <div className='robot-name-container'>
            <button className='solid-ball  rb-clr3'></button>
          <p className='name-style'>Ax Astro</p>
          </div>
          <p  className='name-style'>90%</p>
          <button onClick={() =>setPopup3(!popup3)} className = "solid-ball">
            <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705581236/rbt1_zleyne.png" alt="robo-btn" className='menu-image-rbt'/>
          </button>
          <PopupRbt3 trigger = {popup3} setPopup3 = {setPopup3}>
          <div className='robot-prop-container-popup'>
    <div className='property-heading1'>
    <h1>Ax Astro</h1>
    <button className='solid-ball rb-clr3'></button>
    </div>
    <div className='properties-list-container'>
     <ul className='propety-container'>
      <li>
        Name
      </li>
      <li>Status</li>
      <li>Battery</li>
      <li>Type</li>
      <li>Task</li>
     </ul>
     <ul className='value-container'>
      <li>Ax Astro</li>
      <li>Running</li>
      <li>90%</li>
      <li>Disinfection</li>
      <li>Queue_3</li>
     </ul>
    </div>
    <button className='Abort-btn r3'>Abort</button>
    <button className='Select-btn rb-clr3'>Select</button>
  </div>
          </PopupRbt3>
            {robo3&&displayRobo3}
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default App;
