import { loading } from "./loading";

describe('loading', () => {
  it('is loading', () => {
    loading()
    expect(true).toBeTruthy();
  });
});