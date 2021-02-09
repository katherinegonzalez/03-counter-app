
// import { Fragment } from 'react';

// Functional Component FC
const PrimeraApp = () => {
    
    // Siempre deben estar contenidos en un solo elemento para hacer el return, 
    // puede ser un div o un Fragment, el fragment no pone ningún elemento
    // o, si no queremos importar el Fragment, simplemente dejamos etiquetas vacías <> </>, react ya entiende que esto es un fragment
    return ( 
        <> 
            <h1>Hola Mundo</h1>
            <p>Mi primera aplicación</p>
        </>
    );
        
};

export default PrimeraApp;


