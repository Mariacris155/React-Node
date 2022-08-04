class Cifras {
    constructor(num) {
        this.num = num
    }

    esPar() {
        return this.num %2 === 0
    }

    sumaDigitos() {
        let suma = 0
        let num = this.num.toString()

        
        for (let i = 0; i < num.length; i++) {
            suma += parseInt([i])
            
        }
        

        return suma
    }

}

let patata = new Cifras(454)
console.log(patata.esPar(), patata.sumaDigitos())