import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';

import './index.css';


const divRoot = document.querySelector('#root');

console.log(divRoot);

ReactDOM.render( <PrimeraApp saludo="Hola, Soy Goku" otra={123}/>, divRoot);

// Para enviar números saludo={123}