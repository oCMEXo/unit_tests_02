import { expect } from 'chai';
import { checkStudentKnowledge } from '../utils/studentKnowledgeCheckerUtil.js';

describe('checkStudentKnowledge', () => {
    it('should return true if all student answers are correct', () => {
        const correctAnswers = { q1: 'A', q2: 'B', q3: 'C' };
        const studentAnswers = { q1: 'A', q2: 'B', q3: 'C' };
        const result = checkStudentKnowledge(correctAnswers, studentAnswers);
        expect(result).to.be.true;
    });

    it('should return false if one or more student answers are incorrect', () => {
        const correctAnswers = { q1: 'A', q2: 'B', q3: 'C' };
        const studentAnswers = { q1: 'A', q2: 'C', q3: 'C' };
        const result = checkStudentKnowledge(correctAnswers, studentAnswers);
        expect(result).to.be.false;
    });

    it('should return false if the number of questions in student answers is less than correct answers', () => {
        const correctAnswers = { q1: 'A', q2: 'B', q3: 'C' };
        const studentAnswers = { q1: 'A', q2: 'B' };
        const result = checkStudentKnowledge(correctAnswers, studentAnswers);
        expect(result).to.be.false;
    });

    it('should return false if the number of questions in student answers is greater than correct answers', () => {
        const correctAnswers = { q1: 'A', q2: 'B' };
        const studentAnswers = { q1: 'A', q2: 'B', q3: 'C' };
        const result = checkStudentKnowledge(correctAnswers, studentAnswers);
        expect(result).to.be.false;
    });

    it('should return false if question keys do not match', () => {
        const correctAnswers = { q1: 'A', q2: 'B', q3: 'C' };
        const studentAnswers = { q1: 'A', q2: 'B', q4: 'C' };
        const result = checkStudentKnowledge(correctAnswers, studentAnswers);
        expect(result).to.be.false;
    });

    it('should handle empty objects as student and correct answers (return true)', () => {
        const correctAnswers = {};
        const studentAnswers = {};
        const result = checkStudentKnowledge(correctAnswers, studentAnswers);
        expect(result).to.be.true;
    });

    it('should return false if correct answers are empty and student answers are not', () => {
        const correctAnswers = {};
        const studentAnswers = { q1: 'A' };
        const result = checkStudentKnowledge(correctAnswers, studentAnswers);
        expect(result).to.be.false;
    });

    it('should return false if student answers are empty and correct answers are not', () => {
        const correctAnswers = { q1: 'A' };
        const studentAnswers = {};
        const result = checkStudentKnowledge(correctAnswers, studentAnswers);
        expect(result).to.be.false;
    });

    it('should return true for answers with identical keys and values in different orders', () => {
        const correctAnswers = { q1: 'A', q2: 'B', q3: 'C' };
        const studentAnswers = { q3: 'C', q1: 'A', q2: 'B' };
        const result = checkStudentKnowledge(correctAnswers, studentAnswers);
        expect(result).to.be.true;
    });
});