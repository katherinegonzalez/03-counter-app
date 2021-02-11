import PropTypes from 'prop-types';
// import { Fragment } from 'react';

// Functional Component FC
const PrimeraApp = ( { saludo, subtitulo } ) => { // o (props) =>
    
    // const saludo = 'Hola Mundo';

    /*const saludoObjeto = {
        nombre: 'Katherine',
        edad: 27
    };*/

    // Siempre deben estar contenidos en un solo elemento para hacer el return, 
    // puede ser un div o un Fragment, el fragment no pone ningún elemento
    // o, si no queremos importar el Fragment, simplemente dejamos etiquetas vacías <> </>, react ya entiende que esto es un fragment
    return ( 
        <> 
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
            {/* <pre>{ JSON.stringify(saludoObjeto, null, 3) }</pre>  */}
            <p>Mi primera aplicación</p>
        </>
    );
        
    // Con la etiqueta pre el objeto se imprime como en el código, con llaves y las lìneas las determina el 3 que está como parámetro
};

// Defino el tipo de las propiedades del componente
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    otra: PropTypes.number.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;


