'use strict';
const _ = require('lodash');

let thing = 'pen';
let count = 10;

// (function(x){return x * x;})(3);
(x => x * x)(3);

let compiledString = _.template('Hey! I have <%= count %> <%= thing %>s. Want one?');
console.log(compiledString({ count: count, thing: thing }));
