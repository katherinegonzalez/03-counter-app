
import { Fragment } from 'react';

// Functional Component FC
const PrimeraApp = () => {
    return ( // Siempre deben estar contenidos en un solo elemento para hacer el return, puede ser un div o un Fragment, el fragment no pone ningín elemento
        <Fragment >
            <h1>Hola Mundo</h1>
            <p>Mi primera aplicación</p>
        </Fragment>
    );
        
};

export default PrimeraApp;


