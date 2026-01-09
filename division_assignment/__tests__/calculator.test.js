import { divide } from '../src/calculator.js';

describe('divide', () => {
    // 1. 正向测试 (Positive Test)
    it('divides two numbers correctly', () => {
        expect(divide(10, 2)).toBe(5);
    });

    // 2. 负向测试 (Negative Tests) - 对应 calculator.js 中的三个 if 判断

    // 测试情况 A: 输入不是数字 (对应第一个 if)
    it('throws when inputs are not numbers (first argument)', () => {
        expect(() => divide('10', 2)).toThrow('Both arguments must be numbers');
    });

    it('throws when inputs are not numbers (second argument)', () => {
        expect(() => divide(10, '2')).toThrow('Both arguments must be numbers');
    });

    // 测试情况 B: 输入是 NaN (对应第二个 if)
    it('throws when arguments are NaN', () => {
        expect(() => divide(NaN, 2)).toThrow('Arguments cannot be NaN');
    });

    // 测试情况 C: 除数为 0 (对应第三个 if)
    it('throws when dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });
});