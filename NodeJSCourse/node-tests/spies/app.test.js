const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };

  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Andrew', 25);
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });

  it('should call saveUser with user object', () => {
    var email = 'jeremysimon2@gmail.com';
    var pass = '123abc';

    app.handleSignup(email, pass);

    // Test the function we wanted called by handleSignup. Did it get called with the correct parameters?
    expect(db.saveUser).toHaveBeenCalledWith({email, pass});
  });
});
