import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';


function App() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = ()=>{
    axios.get('https://api.quotable.io/random')
    .then(res=>{
      console.log(res.data)
      setQuote(res.data.content)
      setAuthor(res.data.author)
      // console.log(res.data.quote)
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className="App">
      <button onClick={getQuote} >Get quote</button>
      {quote && <p>{quote}</p>}
      {author ? <p>{author}</p> : null}
    </div>
  );
}

export default App;
