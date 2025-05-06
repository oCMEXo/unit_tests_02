import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../utils/mathUtils.js';

describe('mathUtils module', () => {
  describe('add', () => {
    it('should return the sum of two numbers', () => {
      const result = add(2, 3);
      expect(result).to.equal(5);
    });

    it('should return a negative sum for negative inputs', () => {
      const result = add(-2, -3);
      expect(result).to.equal(-5);
    });

    it('should handle adding zero', () => {
      const result = add(5, 0);
      expect(result).to.equal(5);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      const result = subtract(5, 3);
      expect(result).to.equal(2);
    });

    it('should return a negative result when second number is greater', () => {
      const result = subtract(3, 5);
      expect(result).to.equal(-2);
    });

    it('should handle subtracting zero', () => {
      const result = subtract(5, 0);
      expect(result).to.equal(5);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      const result = multiply(2, 3);
      expect(result).to.equal(6);
    });

    it('should return zero when multiplied by zero', () => {
      const result = multiply(5, 0);
      expect(result).to.equal(0);
    });

    it('should handle negative numbers', () => {
      const result = multiply(-2, 3);
      expect(result).to.equal(-6);
    });
  });

  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      const result = divide(6, 3);
      expect(result).to.equal(2);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(5, 0)).to.throw('Cannot divide by zero');
    });

    it('should handle negative numbers', () => {
      const result = divide(-6, 3);
      expect(result).to.equal(-2);
    });

    it('should return a fraction if division is not even', () => {
      const result = divide(5, 2);
      expect(result).to.equal(2.5);
    });
  });
});
