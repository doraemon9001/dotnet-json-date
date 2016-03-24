var expect = require('chai').expect;
var parse = require('..');

describe('parse-dotnet-json-date', function () {
  it('parses dates', function () {
    expect(parse('/Date(1466121600000)/')).to.eql(new Date(1466121600000));
  });

  it('throws if of the wrong format', function () {
    expect(() => {parse('/Dat(1466121600000)/')}).to.throw('not a .Net JSON date');
  });
});
