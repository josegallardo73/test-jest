const fizzBuzz = require('../fizz-buzz');

describe('[Unit test] FizzBuzz', () => {

    describe('Para múltiplos de 3', () => {

        test('Deberia devolver el string Fizz para múltiplos de 3', () => {

            expect(fizzBuzz(6)).toBe('Fizz');
        });
    })

    describe('Para múltiplos de 5', () => {

        test('Deberia devolver el string Buzz para múltiplos de 5', () => {

            expect(fizzBuzz(10)).toBe('Buzz');
        });
    })
    
    describe('Para múltiplos de 3 y de 5', () => {

        test('Deberia devolver el string FizzBuzz para múltiplos de 3 y de 5', () => {
            expect(fizzBuzz(15)).toBe('FizzBuzz');
        })
    })

    describe('Para cuando no se da ninguno de los casos anteriores', () => {

        test('Deberiá devolver el mismo número que se le pasa como parámetro', () => {
            expect(fizzBuzz(1)).toBe(1);
        })
    }) 
})