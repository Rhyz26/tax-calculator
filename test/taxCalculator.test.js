const { expect } = require('chai');
const calculateTax = require('../taxCalculator');

describe('Tax Calculator', () => {
    it('should return 0 tax for earnings less than 12000', () => {
        expect(calculateTax(10000)).to.equal(0);
    });

    it('should return 0 tax for earnings equal to 12000', () => {
        expect(calculateTax(12000)).to.equal(0);
    });

    it('should return 20% tax for earnings between 12001 and 36000', () => {
        expect(calculateTax(15000)).to.equal(600); // 20% of 3000
    });

    it('should return 40% tax for earnings greater than 36000', () => {
        expect(calculateTax(40000)).to.equal(8800); // 20% on 24000, 40% on 4000
    });

    it('should handle edge cases such as 0 earnings', () => {
        expect(calculateTax(0)).to.equal(0);
    });
});
