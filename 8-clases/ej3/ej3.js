class Rectangulo {
    constructor(largo, ancho){
        this.largo = largo,
        this.ancho= ancho
    }

    calculaArea(){
        return this.largo * this.ancho
    }

    calculaPerimetro(){
        return((this.largo + this.ancho)* 2)
    }
}


let patata = new Rectangulo(5,20)

console.log(patata.calculaArea(), patata.calculaPerimetro())