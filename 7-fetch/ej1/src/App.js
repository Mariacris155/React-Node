import {useEffect, useState} from 'react'
import './App.css';

function App() {
let [data, setData] = useState ([])
let [url, setUrl] = useState ("https://rickandmortyapi.com/api/character/")
let [next, setNext] =useState ("")
let [prev, setPrev] = useState (null)

useEffect (()=>{
  fetch(url)
  .then( res => res.json())
  .then( datos => {
    setData(datos.results)
    setNext(datos.info.next)
    setPrev(datos.info.prev)
  })
}, [url])


  return (
  <>
  <div className='catalogo'>
  {data.map((personaje, index)=>{
    return (
<div>
  <img src={personaje.image} alt={personaje.name}/>
  <h4>{personaje.name}</h4>
</div>
  )
  })}
  </div>
  {prev =! null ? (<button onClick={()=>setUrl(prev)}>Anterior</button>
  ) : (
    <button disabled>Anterior</button>
  ) }
  <button onClick={()=>setUrl(next)}>Siguiente</button>
  </>
  );
}

export default App;
