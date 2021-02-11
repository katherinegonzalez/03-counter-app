import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    // handleAdd
    const handleAdd = (event) => {
        console.log(event);
    }

    return(
        <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>
        {/* <button onClick={ (event) => { handleAdd(event) }}> +1 </button> es lo mismo qué: por que cuando se pasa el mismo paràmetro se puede dejar solo el nombre de la función*/}
        <button onClick={ handleAdd }> +1 </button> 
        </>
    );

}

CounterApp.propTypes = {
    valor: PropTypes.number
}

export default CounterApp;