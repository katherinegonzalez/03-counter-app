import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    return(
        <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>
        </>
    );

}

CounterApp.propTypes = {
    valor: PropTypes.number
}

export default CounterApp;