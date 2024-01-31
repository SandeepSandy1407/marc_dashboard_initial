import React from 'react'
import { useNavigate } from 'react-router'
import "./index.css"

function MoreOptions(props) {
    const navigate  = useNavigate()
  return(props.trigger)? (
    <div className='more-options-outer-container'>
        <div className='more-options-inner-container'>
            <div className='image-containers-more-options' >
                <button className='more-options-button' onClick={()=>navigate("/")}>
                <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1706089951/home_kkccuj.png" className='more-options-image-style' alt ="home-menu-btn" />
                </button>
            </div>
            <div className='image-containers-more-options' >
                <button className='more-options-button' onClick={()=>navigate("/login")}>
                <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1706089905/logout_wpo3b2.png" className='more-options-image-style' alt = "logout-btn"/>
                </button>
            </div>
            <div  className='image-containers-more-options' >
            <button classname = "close-btn">
                close
            </button>
            </div>
        </div>
    </div>
  ):""
}

export default MoreOptions
