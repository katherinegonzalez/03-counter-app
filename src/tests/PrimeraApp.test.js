import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', ()=>{

    test('Debe mostrar el mensaje "Hola, Soy Goku"', () => {
        const saludo = 'Hola, Soy Goku';

        const { getByText } = render( <PrimeraApp saludo={ saludo } otra={123} /> );
        
        expect( getByText(saludo)).toBeInTheDocument();
    });
    
});