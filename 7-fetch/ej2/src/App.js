import {useEffect, useState} from 'react'
import './App.css';

function App() {
  let [data, setData] =useState ([])
  let [data2, setData2] =useState([])
  let [data3, setData3] =useState ([])
  let [loading, setLoading] =useState (true)
  let[select, setSelect] =useState ('')

  useEffect(()=>{
    setLoading(true)
    fetch('https://swapi.dev/api/planets')
    .then(res => res.json())
    .then(datos => {
      setData(datos.results)
      setLoading(false)
    })
  }, [])

  useEffect(()=>{
    setLoading(true)
    fetch(select)
    .then(res => res.json())
    .then(datos => {
      setData2(datos.residents)
      data.lenght > 1 ?setLoading (fase)  : setLoading(true)
    })
  }, [select])

  useEffect(()=> {
    setLoading(true)
    Promise.all(data2.map((url)=> fetch(url)))
    .then((respuesta)=> Promise.all(respuesta.map((res) => res.json()
   .then((datos)=>{
    setData3(datos)
    data.lenght > 1 ?setLoading (fase)  : setLoading(true)
   
   }) 
   )))
  }, [data2])

  if (loading) {
    return <h1>Cargando...</h1>
  } else {

     return (
      <>
      <select onChange={e => setSelect(e.target.value)}>
        {data.map((planeta, index) => {
          return <option key={index} value={planeta.url}>
            {planeta.name}
          </option>
        })}
      </select>
      </>
  
  );
}
}

export default App;
