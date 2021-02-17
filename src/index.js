import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';

import './index.css';
// import CounterApp from './CounterApp';


const divRoot = document.querySelector('#root');

console.log(divRoot);

ReactDOM.render( <PrimeraApp saludo="Hola, Soy Goku" otra={123}/>, divRoot);

// ReactDOM.render( <CounterApp value= {10} />, divRoot );

// ReactDOM.render( <PrimeraApp saludo="Hola, Soy Goku" otra={123}/>, divRoot);

// Para enviar números saludo={123}