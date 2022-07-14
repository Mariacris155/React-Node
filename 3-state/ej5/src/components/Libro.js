import{useState} from "react"

function Libro(props) {
let [stock, setStock] = useState(3)
    return ( 
    
    <div className ="card">
        <img src={props.Libro.formats['image/jpeg']} aly ={props.Libro.title}/>
        <div className="container">
            <h1>{props.libro.title}</h1>
                {props.libro.authors.map((author)=><h4>(author.name)</h4>)}
            <h3>Stock: {stock >0 ? stock :"No hay stock"}</h3>
          {stock>0  ? <button onClick={()=> setStock(--stock)}>Stock</button> :""}
        </div>
        
    </div>
    
    );
  }

  export default Libro