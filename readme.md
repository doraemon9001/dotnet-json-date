# .Net JSON Date [![npm version](https://img.shields.io/npm/v/dotnet-json-date.svg)](https://www.npmjs.com/package/dotnet-json-date) [![npm](https://img.shields.io/npm/dm/dotnet-json-date.svg)](https://www.npmjs.com/package/dotnet-json-date)

Parse and stringify .Net JSON dates.

```sh
npm install dotnet-json-date
```

## Usage

```js
var dotnetJsonDate = require('dotnet-json-date');
```

# Parse

```js
var date = dotnetJsonDate.parse('/Date(1466121600000)/')

date == new Date(1466121600000);
```

# Stringify

```js
var string = dotnetJsonDate.stringify(new Date(1466121600000))

string == '/Date(1466121600000)/';
```

# JSON.stringify replacer

Stringify all dates to .Net JSON dates when stringifying JSON

```js
var object = {
  name: 'bob',
  birthday: new Date(1466121600000),
  numberOfEyes: 3
};

var json = JSON.stringify(object, dotnetJsonDate.replacer);

json == '{"name":"bob","birthday":"/Date(1466121600000)/","numberOfEyes":3}';
```

# JSON.parse reviver

Parse all .Net JSON dates when parsing JSON

```js
var json = '{"name":"bob","birthday":"/Date(1466121600000)/","numberOfEyes":3}';

var object = JSON.parse(json, dotnetJsonDate.reviver);

object == {
  name: 'bob',
  birthday: new Date(1466121600000),
  numberOfEyes: 3
};
```
