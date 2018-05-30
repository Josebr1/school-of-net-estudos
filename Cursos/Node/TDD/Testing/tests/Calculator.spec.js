import chai from 'chai';
import Calculator from './../src/Calculator';

const expect = chai.expect;

describe('Calculator class', () => {
    let calculator = null;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('Sum (2 + 7) return 9', () => {
        const result = calculator.sum(2, 7);

        expect(result).to.equal(9);
        expect(result).to.be.an('number');
    });

    it('Minus (7 - 5) return 2', () => {
        const result = calculator.minus(7, 5);

        expect(result).to.equal(2);
        expect(result).to.be.an('number');
    });

    it('Mult (4 * 3) return 12', () => {
        const result = calculator.mult(4, 3);

        expect(result).to.equal(12);
        expect(result).to.be.an('number');
    });

    it('Div (25 / 5) return 5', () => {
        const result = calculator.div(25, 5);

        expect(result).to.equal(5);
        expect(result).to.be.an('number');
    });
});

