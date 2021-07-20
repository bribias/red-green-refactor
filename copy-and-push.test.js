import { describe } from 'yargs';
import copyAndPush from './copy-and-push.test.js';

describe('copyAndPush', () => {
  it('returns a new array with an additional item pushed to the end', () => {
      const numbers = [1, 2, 3];
      const expected [1, 2, 3, 4];
      const actual = copyAndPush(numbers, 4);

      expect(actual).toEqual(expected);
  });
});
