import { saluda, getId, despide } from './string'
describe('pruebas de strings', () => {
    const saludo = saluda('Jhonatan');
    const des = despide('Jhonatan');

    test('Probando la funcion saluda_ con strings match ', () => {
        /**ToMatch: mira si la cadfena incluye esas palabras dentro, no hace comparacion exacta. */
        /** Hay algun numero en la cadena? */
        expect(saludo).toMatch('Hola soy')
    })
    test('Probando la funcion saluda_ con strings  ', () => {
        expect(des).toMatch('Bye ')
    })
    test('Probando NEGACION MATCH la funcion saluda_ con strings  ', () => {
        expect(des).not.toMatch('Bsye ')
    })
})
describe('Pruebas de enteros en strings', () => {
    const id = getId();
    test('Probando la funcion saluda co numeros ', () => {
        expect(id).toMatch(/\d{2}/)
    })
    test('Probando la funcion saluda con patrones', () => {
        /** Tiene el patron -> "dos digitos"- "tres digitos" ? */
        expect(id).toMatch(/\d{2}-\d{3}/)
    })
})