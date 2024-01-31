import React,{useState,useEffect} from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)

    const tick = () =>{
        setCounter(prevCounter => prevCounter+1)
    }
    useEffect(()=>{
        const intravel = setInterval(tick,1000)
        return ()=>{
            clearInterval(intravel)
        }
    },[])

  return (
    <div>
        <h2>{counter}</h2>
    </div>
  )
}

export default Counter