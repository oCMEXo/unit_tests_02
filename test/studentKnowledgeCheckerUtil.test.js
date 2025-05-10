import { expect } from 'chai';
import { checkStudentKnowledge } from '../utils/studentKnowledgeCheckerUtil.js';

describe('checkStudentKnowledge', () => {
    it('should return true if all student answers are correct', () => {
        const correctAnswers = { q1: 'A', q2: 'B', q3: 'C' };
        const studentAnswers = { q1: 'A', q2: 'B', q3: 'C' };
        expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
    });

    it('should return false if at least one answer is incorrect', () => {
        const correctAnswers = { q1: 'A', q2: 'B', q3: 'C' };
        const studentAnswers = { q1: 'A', q2: 'B', q3: 'D' };
        expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should return false if student answers contain fewer questions', () => {
        const correctAnswers = { q1: 'A', q2: 'B', q3: 'C' };
        const studentAnswers = { q1: 'A', q2: 'B' };
        expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should return false if student answers contain extra questions', () => {
        const correctAnswers = { q1: 'A', q2: 'B' };
        const studentAnswers = { q1: 'A', q2: 'B', q3: 'C' };
        expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should return false if question keys match but are in different order (due to current logic)', () => {
        const correctAnswers = { q1: 'A', q2: 'B', q3: 'C' };
        const studentAnswers = { q3: 'C', q1: 'A', q2: 'B' };
        expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should return true for empty student and correct answers', () => {
        expect(checkStudentKnowledge({}, {})).to.be.true;
    });

    it('should return false if correct answers are empty and student answers are not', () => {
        const studentAnswers = { q1: 'A' };
        expect(checkStudentKnowledge(studentAnswers, {})).to.be.false;
    });

    it('should return false if student answers are empty and correct answers are not', () => {
        const correctAnswers = { q1: 'A' };
        expect(checkStudentKnowledge({}, correctAnswers)).to.be.false;
    });
});
