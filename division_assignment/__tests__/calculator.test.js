import { divide } from '../src/calculator.js';

describe('divide', () => {
    // 1.Positive Tests
    it('divides two numbers correctly', () => {
        expect(divide(10, 2)).toBe(5);
    });

    // 2. Negative Tests - Corresponding to the three if statements in calculator.js

    // Test case A: Inputs are not numbers (corresponding to the first if)
    it('throws when inputs are not numbers (first argument)', () => {
        expect(() => divide('10', 2)).toThrow('Both arguments must be numbers');
    });

    it('throws when inputs are not numbers (second argument)', () => {
        expect(() => divide(10, '2')).toThrow('Both arguments must be numbers');
    });

    // Test case B: Inputs are NaN (corresponding to the second if)
    it('throws when arguments are NaN', () => {
        expect(() => divide(NaN, 2)).toThrow('Arguments cannot be NaN');
    });

    // Test case C: Divisor is 0 (corresponding to the third if)
    it('throws when dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });
});