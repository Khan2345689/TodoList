import { useEffect, useState } from "react";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";



function App() {
  const [data,setData]=useState([])

  const[updateItem, setUpdateItem]=useState('')

  const[flag,setFlag]= useState(false)

  useEffect(()=>{
    if(localStorage.getItem("mytodo")){
      setData(JSON.parse(localStorage.getItem("mytodo")))
    }
  },[])



  return (
    <div className="container">
    
    <Header/>
    <InputTodo setter={setData} updateItem={updateItem} setUpdateItem={setUpdateItem} flag={flag} setFlag={setFlag} data={data}/>
    <ListTodo listData={data} setter={setData} setUpdateItem={setUpdateItem} setFlag={setFlag}/>
    </div>
  );
}

export default App;
