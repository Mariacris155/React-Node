import {useState} from 'react'
import{BrowserRouter} from 'react-router-dom'
import './App.css';
import Resultados from './components/Resultados';

function App() {
  let [num1, setNum1] = useState ()
  let [num2, setNum2] = useState ()
  return (
    <BrowserRouter>
 <div><h1>{num1}</h1>
 <button onClick={()=>{setNum1(++num1)}}>+</button>
 <button onClick={()=>{setNum1(--num1)}}>-</button>
 </div>
 <div><h2>{num2}</h2>
 <button onClick={()=>{setNum2(++num2)}}>+</button>
 <button onClick={()=>{setNum2(--num2)}}>-</button>
 </div>
 <Link to={`/resultados/${num1}/${num2}`} >Resultados</Link>
 <button onClick={()=>{setNum1(0);{setNum2(0)}}}>Reset</button>
 <Routes>
  <Route path="/resultados/:num1/:num2" element={<Resultados />} />
 </Routes>
 </BrowserRouter>
  );
}

export default App;
