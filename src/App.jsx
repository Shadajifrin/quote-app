import React,{ useState,useEffect } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState("");
  const[author,setAuthor]= useState("");
  //http://api.quotable.io/random
  useEffect(() =>{
  fetchData();
  },[]);

    const  fetchData =async() =>{
    const response=await fetch("http://api.quotable.io/random");
    const data=await response.json();
    console.log(data);
    setQuote(data.content);
    setAuthor(data.author);
      }
  
  return (
  <div className='App'>
    <div className='quote'>
      <h2>{quote}</h2>
      <small>{author}</small>
    </div><br />
    <button className='btn' onClick={fetchNewQuote}>Generate new quote</button>
  </div>
  )
}

export default App
