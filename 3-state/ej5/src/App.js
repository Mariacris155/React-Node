
import './App.css';
import Cabecera from './components/Cabecera';
import biblioteca from "./servicio/biblioteca"
import Libro from './components/Libro'

function App() {
  return  ( <>
  <Cabecera biblioteca={biblioteca}/>
 <main className="catalogo">

 
  {biblioteca.libros.map((librito, index)=>{
    return <Libro />
  })}
  </main>
  </>
  )
}

export default App;
