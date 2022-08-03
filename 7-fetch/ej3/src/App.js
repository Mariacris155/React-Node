import {useEffect, useState} from 'react'
import './App.css';

function App() {
let [data, setData] = useState ([])
let [data2, setData2] = useState ([])
let [select, useSelect] = useState ("")
let [pokemons, setPokemons] = useState ([])

useEffect (()=> {
  fetch('https://pokeapi.co/api/v2/type')
  .then(res => res.json())
  .then(function(datos)
  {setData(datos.results)
  })
}, [])

useEffect(() => {
  fetch(select)
  .then(res => res.json())
  .then(function(datos) {
    setData2(datos.pokemon)
    let pokemonsRND = []
    for (let i = 0; i < 2; i++) {
      let rnd = Math.floor(Math.random()*data2.length)
      console.log(data2[rnd])
      pokemonsRND.push(data2[rnd].pokemon.name)
      
    }
    setPokemons(pokemonsRND)
  })
  
}, [select])



  return (
    <>
   <select onChange={(e)=> setSelect (e.target.value) }>
    {data.map((tipo,index)=>{return <option key={index} value={tipo.url}>{tipo.name}</option>})}
   </select>
   <ul>
    {pokemons.map((pokemon, index)=> {return <li key={index}>{pokemon}</li>})}
   </ul>
   </>
  );
}

export default App;
