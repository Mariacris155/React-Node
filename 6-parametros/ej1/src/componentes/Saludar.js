import{useParams} from 'react-router-dom'

function saludar () {
    let parametros = useParams()
    return (<h1>Hola {parametros.nombre}</h1>)
}
export default Saludar