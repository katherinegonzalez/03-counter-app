import { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {

    // useState retorna un arreglo con 2 valores
    const [ counter, setCounter ] = useState(0); // revisar esto en el archivo de desestructuración
    

    // handleAdd
    const handleAdd = (event) => {
        console.log(event);
        setCounter( counter + 1 ); // No funciona con counter ++ porque no debemos muar el objeto
        // ó también se puede hacerlo así:
        // setCounter( (c)=> c + 1);
    }

    const handleReset = () => setCounter(value);

    const handleSubstract = () => setCounter( counter -1 );

    return(
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        {/* <button onClick={ (event) => { handleAdd(event) }}> +1 </button> es lo mismo qué: por que cuando se pasa el mismo paràmetro se puede dejar solo el nombre de la función*/}
        <button onClick= { handleAdd }> +1 </button> 
        <button onClick= { handleReset } >Reset</button>
        <button onClick= { handleSubstract}>-1</button>
        </>
    );

}

CounterApp.propTypes = {
    valor: PropTypes.number
}

export default CounterApp;