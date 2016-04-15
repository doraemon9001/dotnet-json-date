var expect = require('chai').expect;
var dotnetJsonDate = require('..');

describe('parse-dotnet-json-date', function () {
  it('parses dates', function () {
    expect(dotnetJsonDate.parse('/Date(1466121600000)/')).to.eql(new Date(1466121600000));
  });

  it('can parse .net dates when parsing JSON', function () {
    var jsonString = '{"name": "bob", "birthday":"/Date(1466121600000)/", "numberOfEyes": 3}';

    expect(JSON.parse(jsonString, dotnetJsonDate.reviver)).to.eql({
      name: 'bob',
      birthday: new Date(1466121600000),
      numberOfEyes: 3
    });
  });

  it('can stringify .net dates when stringifying JSON', function () {
    var json = {
      name: 'bob',
      birthday: new Date(1466121600000),
      numberOfEyes: 3
    };

    expect(JSON.stringify(json, dotnetJsonDate.replacer)).to.eql(
      '{"name":"bob","birthday":"/Date(1466121600000)/","numberOfEyes":3}'
    );
  });

  it('stringifies dates', function () {
    expect(dotnetJsonDate.stringify(new Date(1466121600000))).to.eql('/Date(1466121600000)/');
  });

  it('throws if of the wrong format', function () {
    expect(() => {dotnetJsonDate.parse('/Dat(1466121600000)/')}).to.throw('not a .Net JSON date');
  });
});
