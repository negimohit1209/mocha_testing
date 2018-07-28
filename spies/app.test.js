const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', ()=> {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);
    it('should call the spy correctly', ()=> {
        var spy = expect.createSpy();
        spy('Mohit', 21);
        expect(spy).toHaveBeenCalledWith('Mohit', 21);
    })

    it("should call saveuser with user object", ()=> {
        var email = 'mohitsngh1007@gmail.com'
        var password = '12345@qwerty'

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    })
}) 