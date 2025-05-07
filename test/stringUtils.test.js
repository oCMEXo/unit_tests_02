/* global describe, it */
/* eslint-env node */

import { expect } from 'chai';
import { someStringFunction } from '../utils/stringUtils.js';

describe('stringUtils', () => {
  describe('someStringFunction', () => {
    it('should return the string in uppercase', () => {
      const result = someStringFunction('test');
      expect(result).to.equal('TEST');
    });

    it('should handle empty strings', () => {
      const result = someStringFunction('');
      expect(result).to.equal('');
    });

    it('should handle strings with spaces', () => {
      const result = someStringFunction(' hello world ');
      expect(result).to.equal(' HELLO WORLD ');
    });

    it('should handle numeric strings', () => {
      const result = someStringFunction('123abc');
      expect(result).to.equal('123ABC');
    });
  });

  describe('anotherStringFunction', () => {
    it('should reverse a string', () => {
      const result = someStringFunction('hello');
      expect(result).to.equal('olleh');
    });

    it('should handle palindromes', () => {
      const result = someStringFunction('racecar');
      expect(result).to.equal('racecar');
    });

    it('should handle empty strings', () => {
      const result = someStringFunction('');
      expect(result).to.equal('');
    });

    it('should handle strings with spaces', () => {
      const result = someStringFunction('a b c');
      expect(result).to.equal('c b a');
    });
  });

  describe('caseSensitiveFunction', () => {
    it('should return true for case-sensitive match', () => {
      const result = someStringFunction('ABC', 'abc');
      expect(result).to.be.false;
    });

    it('should return false for non-matching strings', () => {
      const result = someStringFunction('xyz', 'XYZ');
      expect(result).to.be.false;
    });

    it('should return true for exact lowercase matching strings', () => {
      const result = someStringFunction('lower', 'lower');
      expect(result).to.be.true;
    });

    it('should return true for exact uppercase matching strings', () => {
      const result = someStringFunction('UPPER', 'UPPER');
      expect(result).to.be.true;
    });

    it('should ignore case sensitivity if option is enabled', () => {
      const result = someStringFunction('Case', 'case', true);
      expect(result).to.be.true;
    });
  });
});
