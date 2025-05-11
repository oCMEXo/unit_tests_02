import { expect } from "chai";
import {
  capitalize,
  reverseString,
  isPalindrome,
} from "../utils/stringUtils.js";

describe("stringUtils module", () => {
  describe("capitalize", () => {
    it("should capitalize the first letter of a string", () => {
      const result = capitalize("hello");
      expect(result).to.equal("Hello");
    });

    it("should handle a string that is already capitalized", () => {
      const result = capitalize("Hello");
      expect(result).to.equal("Hello");
    });

    it("should throw an error for non-string inputs", () => {
      expect(() => capitalize(123)).to.throw("Input must be a string");
    });

    it("should handle an empty string", () => {
      const result = capitalize("");
      expect(result).to.equal("");
    });
  });

  describe("reverseString", () => {
    it("should reverse a string", () => {
      const result = reverseString("hello");
      expect(result).to.equal("olleh");
    });

    it("should handle a string with spaces", () => {
      const result = reverseString("hello world");
      expect(result).to.equal("dlrow olleh");
    });

    it("should throw an error for non-string inputs", () => {
      expect(() => reverseString(null)).to.throw("Input must be a string");
    });

    it("should handle an empty string", () => {
      const result = reverseString("");
      expect(result).to.equal("");
    });
  });

  describe("isPalindrome", () => {
    it("should return true for a palindrome", () => {
      const result = isPalindrome("madam");
      expect(result).to.be.true;
    });

    it("should return false for a non-palindrome", () => {
      const result = isPalindrome("hello");
      expect(result).to.be.false;
    });

    it("should return true for a single character", () => {
      const result = isPalindrome("a");
      expect(result).to.be.true;
    });

    it("should throw an error for non-string inputs", () => {
      expect(() => isPalindrome(12321)).to.throw("Input must be a string");
    });

    it("should return true for an empty string (edge case)", () => {
      const result = isPalindrome("");
      expect(result).to.be.true;
    });
  });
});
