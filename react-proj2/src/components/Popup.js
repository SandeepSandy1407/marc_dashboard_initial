import React from 'react'
import "./Popup.css"

function Popup(props) {
  return(props.trigger)? (
    <div className='popup'>
        <div className='popup-inner'>
        <p>
            Here is the pop Up
        </p>
        {props.children}
        <button className='close-btn' onClick={()=>props.setpopup(false)}>Close</button>
    </div>
    </div>
  ):"";
}

export default Popup