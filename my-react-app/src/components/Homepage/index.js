

import MainContent from "../MainContent/index.js"
import ToolContainer from "../ToolContainer/index.js"
import "./index.css"
import React,{useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Cookie from 'js-cookie'
import MoreOptions from "../MoreOptions/index.js";



function Homepage() {
    const [is_menu, setMenu] = useState(false)
    const [moreOptions, setMoreOptions] = useState(false)
    const navigate = useNavigate()
    const addNewElement = () =>{
        setMenu(!is_menu)
    }

    useEffect(() =>{
      const token = Cookie.get('jwt_token')
    if (token === undefined) {
        navigate("/login")
      }
    },[navigate])
  return (
            //top container
            <div className="App-homepage">
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
            <div className='Below-container'>
                <ToolContainer trigger = {is_menu} queueState={false}/>
            <MainContent/>
            </div>
            </div>
          );
        
        
}

export default Homepage