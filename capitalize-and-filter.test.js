import capitalizeAndFilter from './capitalize-and-filter';

describe('capitalizeAndFilter', () => {
  it('takes an array and filters strings that start with the letter f, capitalizing the rest', () => {
    const strings = ['Fire', 'flying high', 'nope', 'not today'];
    const expected = ['NOPE', 'NOT TODAY'];
    const actual = capitalizeAndFilter(strings);

    expect(actual).toEqual(expected);
  });
});
