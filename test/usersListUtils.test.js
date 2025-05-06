import { expect } from 'chai';
import { filterUsersByAge } from '../utils/usersListUtils.js';

describe('filterUsersByAge', () => {
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 15 },
  ];

  it('should return users within the age range (18 to Infinity)', () => {
    const result = filterUsersByAge(users, 18, Infinity);
    expect(result).to.deep.equal([
      { name: 'Alice', age: 25 },
      { name: 'Charlie', age: 30 },
    ]);
  });

  it('should return an empty array if no users are older than or equal to the specified age', () => {
    const result = filterUsersByAge(users, 40, Infinity);
    expect(result).to.deep.equal([]);
  });

  it('should return the full list of users if the specified age is 0', () => {
    const result = filterUsersByAge(users, 0, Infinity);
    expect(result).to.deep.equal(users);
  });

  it('should handle an empty users array (return empty array)', () => {
    const result = filterUsersByAge([], 18, Infinity);
    expect(result).to.deep.equal([]);
  });
});
