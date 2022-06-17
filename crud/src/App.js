
import './App.css';
import {useState, useEffect} from 'react'
import Axios from 'axios'
import axios from 'axios';

function App() {
  const [command, setCommand]=useState('')
  const [description, setDescription]=useState('')
  const [category, setCategory]=useState('')
  const [data, setData] = useState([])

  console.log(data[0])

  async function getData(){
    await axios.get('https://pretty-radios-care-20-231-59-64.loca.lt/unix-commands')
    .then((response)=>{
      setData(response.data)
      
      
    })
  }

  useEffect(()=>{
    getData()
    
  },[])



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

        <div>
          {data.map((val,key)=>{
            return(
              <div key={key}>{val.command}</div>
            )
          })}


        </div>

     
    </div>
  );
}

export default App;
