const ZERO = Number.prototype.valueOf();
const ONE = require("successor")(ZERO)

const truthy = ONE;
const falsy = ZERO;

const booleanPro = {
    getTrue: () => Boolean(truthy), // return true
    getFalse: () => Boolean(falsy), // return false
    isTrue: (value) => value === Boolean(truthy), // check if value true
    isFalse: (value) => value === Boolean(falsy), // check if value false
};
  
module.exports = booleanPro;
