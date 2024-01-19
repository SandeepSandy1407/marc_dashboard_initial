import React from 'react'
import "./PopupRbt1.css"

function PopupRbt1(props) {
  return(props.trigger)? (
    <div className='popup'>
      <div className='popup-inner'>
        <div>
        {props.children}
        </div>
        <button className='close-btn' onClick={()=>props.setPopup1(false)}>
          <img src = "https://res.cloudinary.com/dg9wsic7j/image/upload/v1705556698/close_gs4pn8.png" alt = "close-btn" className='close-img'/>
        </button>
    </div>
    </div>
  ):"";
}

export default PopupRbt1