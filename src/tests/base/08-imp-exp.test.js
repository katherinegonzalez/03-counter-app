import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
    test('Debe retornar un héroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);
        console.log(heroe);

        const heroeData = heroes.find(heroe => heroe.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe retornar undefined si Héroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe( undefined );
    });

    test('Debe retornar un arreglo con los héroes de DC', () => {
        
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);
         const heroesDCData = heroes.filter(heroe => heroe.owner === 'DC');

        expect(heroesDC).toEqual( heroesDCData );
    });

    test('Debe retornar un arreglo con los héroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroesDC = getHeroesByOwner(owner);
         const heroesDCData = heroes.filter(heroe => heroe.owner === 'Marvel');

        expect(heroesDC.length).toBe( heroesDCData.length );
    });
    
    
});