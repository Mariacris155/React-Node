function Tarjeta(props){
    return (
        <div className = "card">
            <img src = {props.cartel} alt={props.titulo}/>
            <div className="container">
                <h4>{props.titulo}</h4>
                <p>{props.sinopsis}</p>
            </div>
        </div>
    )
}

function Main(props) {
    return (
        <main>
            {props.peliculas.map((pelicula, index) => {
        return (
            <Tarjeta
            cartel={pelicula.cartel}
            titulo={pelicula.titulo}
            sinopsis={pelicula.sinopsis}
            />
        )
              })}
       </main>
    )
    
}

export default Main