import fetchQuotes from './fetch-quotes';

describe('fetchQuotes', () => {
  it('fetches a single quote object from API', async () => {
    const quote = await fetchQuotes();
      
    expect(quote).toEqual(expect.any(Object));
  });
});
