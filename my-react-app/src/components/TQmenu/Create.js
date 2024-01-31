import React, { useState,useEffect } from 'react'

function Create(props) {
  const [x,setX] = useState(0)
  const [y,setY]= useState(0)
  const [is_menu,setMenu] = useState(false)
  const [queue,setQueue] = useState(false)

  const setMouseCoordinates =(e) =>{
    setX(e.clientX)
    setY(e.clientY)
    console.log(x)
    console.log(y)
  }

  useEffect(()=>{
    window.addEventListener("mousemove",setMouseCoordinates)
    console.log(x)
    console.log(y)
  },[])

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

  return(props.trigger)? (
    <div className='app-create'>
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
      <div>
      <div className='create-draw-container'>
        {toolContainer}
      </div>
      <div>
        <h3>Mouse Co-ordinates</h3>
        <p>x - {x}</p>
        <p>y - {y}</p>
      </div>
      </div>
    </div>
  ):""
}

export default Create