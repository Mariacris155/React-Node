
import './App.css';
import videojuegos from './datos/videojuegos';
import { useState } from "react";
import Videojuego from './components/Videojuego';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  const [catalogo] = useState (videojuegos)
  return (
    <BrowserRouter>
    <Routes>
      <Route
      path='/'
    element={catalogo.map((videojuego, index)=>{
      return (<Videojuego full={false} videojuego ={videojuego} key={index}/>)
    })}
    />
    {catalogo.map((videojuego, index) => {
      return ( 
      <Route 
       path={"/videojuegos/" + videojuego.titulo.replaceAll(" ", "-")} 
       element={<Videojuego full={true} videojuego={videojuego} key={index} />}
       />
       )

    })}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
