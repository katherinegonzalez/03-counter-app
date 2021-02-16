import '@testing-library/jest-dom'; // para que se autocompleten las cosas de jest
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    
    test('getSaludo debe retorna Hola Fernando!', () => {
        const nombre = 'Fernando';

        const saludo = getSaludo( nombre );

        expect(saludo).toBe('Hola ' + nombre + '!');
    })

    test('getSaludo debe retornar Hola Carlos! si no ha argumento nombre', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');
    })
    


});