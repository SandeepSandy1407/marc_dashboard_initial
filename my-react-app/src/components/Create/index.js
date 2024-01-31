import React, {useState,useEffect} from 'react'
import ToolContainer from "../ToolContainer/index.js"
import MoreOptions from '../MoreOptions/index.js';
import "./index.css"
import Canvas from './canvas.js';

function Create() {
    const [is_menu, setMenu] = useState(false)
    const [moreOptions, setMoreOptions] = useState(false)
    const addNewElement = () =>{
        setMenu(!is_menu)
    }
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const trackTheMouse = (e) =>{
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        window.addEventListener("mousemove",trackTheMouse)
    },[])

  return (
    <div>
    <div  className="App-header">
        <header>
                {/* nav bar conatiner*/}
                <nav className = "nav-container">
                  <button className = "menu-button" onClick={addNewElement}>
                  <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705481024/application_iksujn.png" alt = "menu" className = "menu-image"/>
                  </button>
                  <h1 className = "nav-head">Homepage</h1>
                  <button  className = "menu-button" onClick={()=>setMoreOptions(!moreOptions)}>
                  <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705484515/sort_dxflam.png" alt = "more" className = "menu-image"/>
                  {
                      moreOptions && <MoreOptions trigger = {moreOptions}/>
                    }
                  </button>
                </nav>
              </header>
    </div>
    <div className='below-container'>
        <ToolContainer trigger = {is_menu}/>
        <div className='create-draw-container' >
        <Canvas
        width={700}
        height={500}
      />
            <p>x {x}</p>
            <p>y {y}</p>
        </div>

    </div>
    </div>
  )
}

export default Create