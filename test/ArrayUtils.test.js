/* global describe, it */
/* eslint-env node */

import { expect } from 'chai';
import { findMax, findMin, sortArray } from '../utils/arrayUntils.js';

describe('ArrayUtils', () => {
  describe('findMax', () => {
    it('should return the maximum number in an array of numbers', () => {
      const result = findMax([1, 2, 3, 4, 5]);
      expect(result).to.equal(5);
    });

    it('should return -Infinity for an empty array', () => {
      const result = findMax([]);
      expect(result).to.equal(-Infinity);
    });

    it('should handle arrays with negative numbers', () => {
      const result = findMax([-1, -2, -3, -4]);
      expect(result).to.equal(-1);
    });
  });

  describe('findMin', () => {
    it('should return the minimum number in an array of numbers', () => {
      const result = findMin([1, 2, 3, 4, 5]);
      expect(result).to.equal(1);
    });

    it('should return Infinity for an empty array', () => {
      const result = findMin([]);
      expect(result).to.equal(Infinity);
    });

    it('should handle arrays with negative numbers', () => {
      const result = findMin([-1, -2, -3, -4]);
      expect(result).to.equal(-4);
    });
  });

  describe('sortArray', () => {
    it('should return a sorted array in ascending order', () => {
      const result = sortArray([5, 2, 8, 1, 3]);
      expect(result).to.deep.equal([1, 2, 3, 5, 8]);
    });

    it('should handle an already sorted array', () => {
      const result = sortArray([1, 2, 3, 4, 5]);
      expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should handle an empty array', () => {
      const result = sortArray([]);
      expect(result).to.deep.equal([]);
    });
  });
});
