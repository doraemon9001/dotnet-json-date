var regexp = /\/Date\((.*)\)\//;

module.exports = function(date) {
  var match = regexp.exec(date);
  if (match) {
    return new Date(Number(match[1]));
  } else {
    throw new Error('not a .Net JSON date: ' + date);
  }
};
