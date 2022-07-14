function Casa(props) {
    return (
      <div>
        <p>metros:{props.datos.metros}</p>
        <p>año de construccion:{props.datos.ano}</p>
        <p>habitaciones:{props.datos.habitaciones}</p>
        <p>garaje:{props.datos.garaje ? "1 plaza" : "no tiene"}</p>
        <p>terreno:{props.datos.terreno ? "tiene tierras" : "no tiene tierras"}</p>
        <p>trastero:{props.datos.trastero ? "puedes guardar tus trastos" : "no hay"}</p>
      </div>
    );
  }

  export default Casa;