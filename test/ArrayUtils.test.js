import { expect } from "chai";
import { findMax, findMin, removeDuplicates } from "../utils/arrayUntils.js";

describe("Utils module", () => {
    describe("findMax", () => {
        it("should return the maximum value from an array", () => {
            const result = findMax([1, 2, 3, 4, 5]);
            expect(result).to.equal(5);
        });

        it("should throw an error if input is not an array", () => {
            expect(() => findMax("not an array")).to.throw("Input must be an array");
        });

        it("should handle an array with negative numbers", () => {
            const result = findMax([-10, -5, -3, -1]);
            expect(result).to.equal(-1);
        });
    });

    describe("findMin", () => {
        it("should return the minimum value from an array", () => {
            const result = findMin([1, 2, 3, 4, 5]);
            expect(result).to.equal(1);
        });

        it("should throw an error if input is not an array", () => {
            expect(() => findMin(null)).to.throw("Input must be an array");
        });

        it("should handle an array with negative numbers", () => {
            const result = findMin([-10, -5, -3, -1]);
            expect(result).to.equal(-10);
        });
    });

    describe("removeDuplicates", () => {
        it("should return an array without duplicate values", () => {
            const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
            expect(result).to.deep.equal([1, 2, 3, 4, 5]);
        });

        it("should throw an error if input is not an array", () => {
            expect(() => removeDuplicates({})).to.throw("Input must be an array");
        });

        it("should handle an empty array", () => {
            const result = removeDuplicates([]);
            expect(result).to.deep.equal([]);
        });
    });
});