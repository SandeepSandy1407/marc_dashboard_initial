import React, {useState,useEffect} from 'react'

function Unmount() {
    const[x,setX] =useState(0)
  const[y,setY] = useState(0)

    const changeTheCoordinates = (e) =>{
        setX(e.clientX)
        setY(e.clientY)
        
      }
      
      useEffect(()=>{
        window.addEventListener("mousemove", changeTheCoordinates)
    
        return()=> {
          window.removeEventListener("mousemove", changeTheCoordinates)
    }
    }, [])
  return (
    <div>
        <h3>
            Mouse Location
        </h3>
        <p>
            x - {x}
        </p>
        <p>

            y - {y}
        </p>
    </div>
  )
}

export default Unmount