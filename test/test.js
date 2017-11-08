const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function() {
    it('Si la palabra termina en "ar", se le quitan esas dos letras', function() {
        const translation = platzom("Programar")
        expect(translation).to.equal("Program")
    })
    it('Si la palabra inicia con "z", se le añade "pe" al final', function() {
        const translation1 = platzom("Zorro")
        const translation2 = platzom("Zarpar")

        expect(translation1).to.equal("Zorrope")
        expect(translation2).to.equal("Zarppe")
    })
    it('Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guión del medio', function() {
        const translation = platzom("Abecedario")
        expect(translation).to.equal("Abece-dario")
    })
    it('Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas', function() {
        const translation = platzom("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })
})