var regexp = /\/Date\((.*)\)\//;

module.exports.parse = function(date) {
  var match = regexp.exec(date);
  if (match) {
    return new Date(Number(match[1]));
  } else {
    throw new Error('not a .Net JSON date: ' + date);
  }
};

module.exports.reviver = function(k, value) {
  if (typeof value === 'string') {
    var match = regexp.exec(value);
    if (match) {
      return new Date(Number(match[1]));
    }
  }

  return value;
};

module.exports.replacer = function(key, value) {
  if (key) {
    var date = this[key];
    if (date instanceof Date) {
      return module.exports.stringify(date);
    }
  }

  return value;
};

module.exports.stringify = function(date) {
  return `/Date(${date.getTime()})/`;
};
