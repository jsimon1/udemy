// nodemon --exec "npm test"
const utils = require('./utils.js');
const expect = require ('expect');

describe('Utils', () => {
  it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
    // if (res !== 44) {
    //   throw new Error(`Value not correct. 44 was expected, got ${res}`);
    // }
  });

  it('should square a number', () => {
    var res = utils.square(5);

    expect(res).toBe(25).toBeA('number');
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 5, (sum) => {
      expect(sum).toBe(9).toBeA('number');
      done();
    });
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(3, (square) => {
      expect(square).toBe(9).toBeA('number');
      done();
    });
  });
});

it('should verify first and last names are set', () => {
  var user = {location: 'Montvale', age: 19};
  var res = utils.setName(user, 'Jeremy Simon');

  expect(res).toInclude({
    firstName: 'Jeremy',
    lastName: 'Simon'
  });
});

// it('should expect some values', () => {
//   //expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//   //expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Jeremy',
//     age: 19,
//     location: 'Montvale'
//   }).toExclude({
//     age: 23
//   });
// });
