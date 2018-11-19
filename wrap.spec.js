const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Returns the string argument if the column number was greater than its length', () => {
    expect(wrap('Hello there', 15)).to.equal('Hello there');
  });
  it('Wraps the string argument with a width of the provided column number', () => {
    expect(wrap('Hello there', 5)).to.equal('Hello\nthere');
  });
});
