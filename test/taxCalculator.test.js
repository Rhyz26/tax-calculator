// RAYMOND NJAGALA

const assert = require('assert');
const calculateTax = require('../taxCalculator');  // Import the tax calculator function

describe('Tax Calculator', () => {
    // First test: no tax for earnings less than 12000
    it('should return 0 for earnings less than 12000', () => {
        assert.strictEqual(calculateTax(10000), 0);
    });

    // Second test: 20% tax for earnings between 12000 and 36000
    it('should calculate 20% tax for earnings between 12000 and 36000', () => {
        assert.strictEqual(calculateTax(20000), 1600); // 20% of 8,000 (20000 - 12000)
    });

    // Third test: 40% tax for earnings greater than 36000
    it('should calculate 40% tax for earnings greater than 36000', () => {
        assert.strictEqual(calculateTax(40000), 8800); // 20% of 24,000 + 40% of 4,000
    });

    // Fourth test: edge case of exactly 12000
    it('should return 0 tax for earnings of exactly 12000', () => {
        assert.strictEqual(calculateTax(12000), 0);
    });

    // Fifth test: edge case of exactly 36000
    it('should calculate 20% tax for earnings of exactly 36000', () => {
        assert.strictEqual(calculateTax(36000), 4800); // 20% of 24,000 (36000 - 12000)
    });
});
