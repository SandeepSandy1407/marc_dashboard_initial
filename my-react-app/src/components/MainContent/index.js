import React, {useState} from 'react'
import PopupRbt1 from '../PopupRbt1';
import PopupRbt2 from '../PopupRbt2';
import PopupRbt3 from '../PopupRbt3';
import "./index.css"

function MainContent() {
        const [robo1,setRobo1] = useState(false)
        const [robo2,setRobo2] = useState(false)
        const [robo3,setRobo3] = useState(false)
        const [popup1, setPopup1] = useState(false)
        const [popup2, setPopup2] = useState(false)
        const [popup3, setPopup3] = useState(false)
    
      // Menu's Queue Container
      //Ax Clean Container
      const displayRobo1 = (
        <div className='robot-prop-container-1'>
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
        <div  className='robot-prop-container-2'>
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
        <div className='robot-prop-container-3'>
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
  return (
    <div className = "content-container">
                
                <div className = "map-container"> 
                  
                  <div className='robo1' onMouseEnter={()=>setRobo1(true)} onMouseLeave={() =>setRobo1(false)}>
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
                  <div className='robo2' onMouseEnter={()=>setRobo2(true)} onMouseLeave={() =>setRobo2(false)}>
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
                  <div className='robo3' onMouseEnter={()=>setRobo3(true)} onMouseLeave={() =>setRobo3(false)}>
                  <div className='robot-name-container'>
                    <button className='solid-ball  rb-clr3'></button>
                  <p className='name-style'>Ax Astro</p>
                  </div>
                  <p  className='name-style'>90%</p>
                  <button onClick={() =>setPopup3(!popup3)} className = "solid-ball">
                    <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705921761/rbt1_jih9pr.png" alt="robo-btn" className='menu-image-rbt'/>
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
              </div>
  )
}

export default MainContent