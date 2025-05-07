/* global describe, it */
/* eslint-env node */

import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../utils/mathUtils.js';

describe('mathUtils', () => {
  describe('add', () => {
    it('should return the sum of two positive numbers', () => {
      const result = add(2, 3);
      expect(result).to.equal(5);
    });

    it('should return the sum of a positive and a negative number', () => {
      const result = add(5, -3);
      expect(result).to.equal(2);
    });

    it('should return 0 when adding zero to a number', () => {
      const result = add(7, 0);
      expect(result).to.equal(7);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      const result = subtract(10, 3);
      expect(result).to.equal(7);
    });

    it('should return a negative result when subtracting a larger number', () => {
      const result = subtract(3, 10);
      expect(result).to.equal(-7);
    });

    it('should return 0 when subtracting a number from itself', () => {
      const result = subtract(8, 8);
      expect(result).to.equal(0);
    });
  });

  describe('multiply', () => {
    it('should return the product of two positive numbers', () => {
      const result = multiply(4, 5);
      expect(result).to.equal(20);
    });

    it('should return 0 when multiplying any number by zero', () => {
      const result = multiply(10, 0);
      expect(result).to.equal(0);
    });

    it('should return the product of a positive and a negative number', () => {
      const result = multiply(6, -3);
      expect(result).to.equal(-18);
    });
  });

  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      const result = divide(10, 2);
      expect(result).to.equal(5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(10, 0)).to.throw('Cannot divide by zero');
    });

    it('should return a negative quotient for a positive and a negative number', () => {
      const result = divide(10, -2);
      expect(result).to.equal(-5);
    });

    it('should return a positive quotient for two negative numbers', () => {
      const result = divide(-10, -2);
      expect(result).to.equal(5);
    });
  });
});
