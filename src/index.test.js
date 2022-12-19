import { sum } from './index';

describe('sum', () => {
  it('sum number', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
