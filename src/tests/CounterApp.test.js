import { shallow } from "enzyme"
import CounterApp from "../CounterApp"

describe('Pruebas en <CounterApp />', () => {

    const wrapper = shallow( <CounterApp />);

    test('Debe mostrar <CounterApp /> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar el valor por defecto de 100', () => {

        const wrapper = shallow( <CounterApp value={100}/>);
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('100');
        
    });

    test('Debe incrementar con el botón +1', () => {

        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');
    });
    
    test('Debe decrementar con el botón -1', () => {
        const counterTextInitial = wrapper.find('h2').text().trim();
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe(`${counterTextInitial - 1}`);
    })
    
})
