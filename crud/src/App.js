
import './App.css';
import {useState, useEffect} from 'react'
import Axios from 'axios'

function App() {
  const [command, setCommand]=useState('')
  const [description, setDescription]=useState('')
  const [category, setCategory]=useState('')

  console.log(command)

  const addToDB = ()=>{
    Axios.post("https://puny-singers-smoke-20-228-167-226.loca.lt/insert", {
        command: command,
        description:description,
        category:category
    }).then(err=>
      {console.error(err);}
    )

  }

  return (
    <div className="App">
      
        <h1>MERN STACK</h1>
        <input type='text' id="command" placeholder='Command' onChange={event =>setCommand(event.target.value)}></input>
        <input id="description" placeholder='Category' onChange={event =>setCategory(event.target.value)}/>
        <textarea id="description" placeholder='Description' onChange={event =>setDescription(event.target.value)}/>
        <button onClick={addToDB}>Add Command</button>

     
    </div>
  );
}

export default App;
