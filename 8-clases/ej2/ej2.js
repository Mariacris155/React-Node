class Distancia {

    millasAMetros(millas) {
        return millas * 1609.34
    }

    millasAKilometros(millas){
        return millas * 1.609
    }
}


let recorrer = new Distancia

recorrer.millasAMetros(20)