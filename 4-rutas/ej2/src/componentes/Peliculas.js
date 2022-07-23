import {Link} from "react-router-dom"

function Peliculas(props) {
    if (props.full)
    return (
        <div className="card">
        <img src={props.cartel} alt ={props.titulo} />
       <Link to={"/" + props.titulo.replaceAll(" ", "-")}>
        <h1>{props.titulo}</h1>
       </Link> 
       <P>{props.sinopsis}</P>
        </div>
    )
    else{
        return (
            <div className="card">
            <img src={props.cartel} alt ={props.titulo} />
           <Link to={"/" + props.titulo.replaceAll(" ", "-")}><h1>{props.titulo}</h1></Link> 
            </div>
        )
    }

}
export default Peliculas