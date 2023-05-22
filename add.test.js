
const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const caesar = require('./caesarCipher');
const analyzeArray = require('./analyzeArray');

test('returns true', () => {
    expect(capitalize('Letter')).toBeTruthy()
});
test('returns Its reversed string', () => {
    expect(reverseString('Hello')).toMatch(/olleH/)
});
test('Calculate for Addition', () => {
    expect(calculator.add(2, 5)).toBe(7)
});
test('Calculate for Addition', () => {
    expect(calculator.subtract(5, 5)).toBe(0)
});
test('Calculate for Addition', () => {
    expect(calculator.divide(2, 5)).toBeCloseTo(0.4)
});
test('Calculate for Addition', () => {
    expect(calculator.multiply(7, 7)).toBe(49)
});
test('Calculate for Addition', () => {
    expect(caesar('HELL0@O2', 3)).toBe('KHOO0@R2')
});
test('Calculate for Addition', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({ 
        average: 4, 
        min: 1, 
        max: 8, 
        length: 6 
    })
});