import React ,{useState} from "react"
import Popup from "./components/Popup"
import './App.css';


function App() {
  const[popup,setpopup] = useState(false)
  return (
    <div className="App">
      <div>
        <h1>This is for PopUp </h1>
        <p>Click the below button to open a popup</p>
        <button onClick={() =>setpopup(!popup)}>Click Here</button>
        <Popup trigger = {popup} setpopup = {setpopup}>
          <h3>My Popup</h3>
        </Popup>
      </div>
    </div>
  );
}

export default App;
