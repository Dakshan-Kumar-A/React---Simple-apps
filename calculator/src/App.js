import './App.css';
import { useState,useRef } from 'react';

function App() {
  
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const addNum = (e) => {
    e.preventDefault();
    setResult((result) => result + Number   
    (inputRef.current.value))
  }
  const subNum = (e) => {
    e.preventDefault();
    setResult((result) => result - Number   
    (inputRef.current.value))
  }
  const mulNum = (e) => {
    e.preventDefault();
    setResult((result) => result * Number   
    (inputRef.current.value))
  }
  const divNum = (e) => {
    e.preventDefault();
    setResult((result) => result / Number   
    (inputRef.current.value))
  } 
  const resetPage = (e) => {
    e.preventDefault();
    inputRef.current.value = '';
    setResult((preVal) => preVal*0)
  }
  return (
    
    <div className='App'>
      <h1>Simple Calculator App</h1>
      <br />
      <div className='calc'>
      <label> Number: <input type="number" id="num1" ref={inputRef} required placeholder='enter number'/></label>
      <br />
      <button onClick={addNum}>+</button>
      <button onClick={subNum}>-</button>
      <button onClick={mulNum}>*</button>
      <button onClick={divNum}>/</button>
      <button onClick={resetPage}>Reset</button>
      <p ref={resultRef}>{result}</p>
      </div>
    </div>
  );
}

export default App;
