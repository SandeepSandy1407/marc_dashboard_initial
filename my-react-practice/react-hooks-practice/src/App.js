import React,{useState} from 'react'
import Unmount from './Components/Unmount';
import Counter from './Components/Counter';
import DataFetch from './Components/DataFetch';
import './App.css';


function App() {
  const[name,setName] = useState({firstName:"",lastName:""})
  const[employeName,setEmployeName] = useState("")
  const[employeId,setEmployeId] = useState("")
  const[employeesList,setEmployeesList] = useState([])
  const [removeCounter, setRemoveCounter] = useState(true)
  const[remove, setRemove] = useState(true)

  const addEmployee = () =>{
      // Create a new employee object using the input values
      const newEmployee = {
        "Name": `${employeName}`,
        "Id": `${employeId}`,
      };
    
      // Update the employeesList state with the new employee
      setEmployeesList([...employeesList, newEmployee]);
    
      // Clear the input fields after adding the employee
      setEmployeName("");
      setEmployeId(0);
    
  
    
  }

  
  
  return (
    <div className="App">
      <form>
        <label htmlFor="firstName">Enter the First Name</label>
        <input type = "input" id = "firstName" onChange={(e)=>setName({...name,firstName:e.target.value})}/>
        <p>{name.firstName}</p>
        <label htmlFor = "lastName">Enter the Last Name</label>
        <input type = "input" id = "lastName"  onChange={(e)=>setName({...name,lastName:e.target.value})}/>
        <p>{name.lastName}</p>
        <p>{JSON.stringify(name)}</p>
        <label htmlFor = "employeName">Name Of The Employee</label>
        <input type = "text" id = "employeName" value = {employeName} onChange={(e)=>setEmployeName(e.target.value)}/>
        <label htmlFor ="employeId">Enter The Employee Id</label>
        <input type = "text" id = "employeId" value = {employeId}  onChange={(e)=>setEmployeId(e.target.value)}/>
        <button onClick = {addEmployee}>Add</button>
        <p>
          {JSON.stringify(employeesList)}
        </p>
      </form>
      <div>
        <ul>
          {
            employeesList.map(eachEmployee=>(
              <li key ={eachEmployee.Id} >Name {eachEmployee.Name}</li>
            ))
          }
        </ul>
      </div>
      <button onClick={()=>setRemove(!remove)}>
            ToggleButton
      </button>
      <div>{remove && <Unmount/>}</div>
      <button onClick={() => setRemoveCounter(!removeCounter)}>
        toggle Counter
      </button>
      <div>
        {removeCounter && <Counter/>}
      </div>
      <div>
        <DataFetch/>
      </div>
    </div>
  );
}

export default App;
