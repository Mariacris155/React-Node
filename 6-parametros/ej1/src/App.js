
import{useState} from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Saludar from './componentes/Saludar';



function App() {
  let [input, setInput] = useState ("")
  return (
    <BrowserRouter>
    <Routes>
    <Route index element ={
      <>
  <input type= 'text' onChange={(e)=> setInput (e.target.value)} value= {input}/>
  <Link to={"/saludar/" + input}></Link><button>Saludar</button>
  </>
    }
    />
  <Route path= '/saludar/:nombre' element={<Saludar/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
