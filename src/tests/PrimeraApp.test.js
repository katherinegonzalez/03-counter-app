// import { render } from "@testing-library/react";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import PrimeraApp from "../PrimeraApp";


describe('Pruebas en <PrimeraApp />', ()=>{

    /*test('Debe mostrar el mensaje "Hola, Soy Goku"', () => {
        const saludo = 'Hola, Soy Goku';

        const { getByText } = render( <PrimeraApp saludo={ saludo } otra={123} /> );
        
        // expect( getByText(saludo)).toBeInTheDocument(); para que esta funcione debemos hacer el import '@testing-library/jest-dom/extend-expect' en el setupTest.js;
    });*/

    test('Debe mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } otra={123}/> );
        
        expect (wrapper).toMatchSnapshot();
    })

    test('Debe enviar el subtítulo enviado por props', () => {
        
        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'Soy un subtitulo';

        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo } 
                otra={123}
                subtitulo ={subtitulo}
                />
            );
        
            const textoParrafo = wrapper.find('#subtitulo').text();
            console.log(textoParrafo);

            expect(textoParrafo).toBe(subtitulo);

    })
    

});