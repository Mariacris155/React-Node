import {Link} from 'react-router-dom'

function Videojuego({videojuego, full}) {
   if (!full) {
    return (
    <div>
      <Link to={"/" + videojuego.titulo.replaceAll(" ", "-")}><h1>{videojuego.titulo}</h1></Link>
    </div>
    )
   }else{
    return (
        <div className="card">
            <h2>{videojuego.titulo}</h2>
            <p>Año: {videojuego.anyo}</p>
            <p>Plataforma: {videojuego.plataforma}</p>
            <p>Creador: {videojuego.creador}</p>
            <p>{videojuego.sinopsis}</p>
       
        </div>
    );
   }
  }
  
  export default Videojuego;