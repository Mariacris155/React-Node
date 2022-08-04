class Finanzas {
    dolaresToEuros(dolares){
        return dolares * 0.99
    }
    eurosToDolares(euros){
        return euros * 1.01
    }
}

let dinerito = new Finanzas

console.log(dinerito.dolaresToEuros(4), dinerito.eurosToDolares(3))