import React,{useState} from 'react'
import ToolContainer from "../ToolContainer/index.js"

function Header() {
    const [is_menu, setMenu] = useState(false)
    const addNewElement = () =>{
        setMenu(!is_menu)
    }
  return (
    <div  className="App-header">
        <header>
                {/* nav bar conatiner*/}
                <nav className = "nav-container">
                  <button className = "menu-button" onClick={addNewElement}>
                  <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705481024/application_iksujn.png" alt = "menu" className = "menu-image"/>
                  </button>
                  <h1 className = "nav-head">Homepage</h1>
                  <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705484515/sort_dxflam.png" alt = "more" className = "menu-image"/>
                </nav>
              </header>
        <div>
            <ToolContainer trigger = {is_menu}/>
        </div>
    </div>
  )
}

export default Header
