import {useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import videoclub from "./datos/videoclub"
import Catalogo from "./componentes/Catalogo";
import Peliculas from "./componentes/Peliculas";

function App() {
  const [catalogo] = useState (videoclub)
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={ <Catalogo catalogo={catalogo}/>} />
     {catalogo.map((peliculas,index)=>{
      return (
      <Route 
      path={"/" + props.titulo.replaceAll(" ", "-")} 
      element={<peliculas full={true} sinopsis={peliculas.sinopsis} cartel={peliculas.cartel} titulo={peliculas.titulo}}
      />
      )
  })}
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
