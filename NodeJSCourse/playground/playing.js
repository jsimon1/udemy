const _ = require('lodash');

var objects = [{ 'a': 1 }, { 'b': 2 }];

var deep = _.cloneDeep(objects);
console.log('Deep: ' + JSON.stringify(deep, undefined, 2));
console.log('Objects: ' + JSON.stringify(objects, undefined, 2));
