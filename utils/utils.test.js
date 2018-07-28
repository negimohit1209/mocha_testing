const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33,11);
    expect(res).toBe(44).toBeA('number')
});

it('should square a number', () => {
    var res = utils.square(5);
    expect(res).toBe(25).toBeA('number')
});

it('should expect some values', () => {
    // expect(12).toNotBe(11);
    // expect({name: 'Mohit'}).toEqual({name: 'Mohit'})
    // expect([2,3,4]).toInclude(5);
    expect({
        name: 'Mohit Negi',
        age: 21,
        location: 'kolkata'
    }).toInclude({
        age: 21
    })
});

it("should set firstname and last name" , ()=>{
    var user = {
        location: 'kolkata',
        age: '21'
    }
    var res = utils.setName(user, 'Mohit Negi')
    expect(res).toInclude({
        firstName: 'Mohit',
        lastName: 'Negi'
    })
})
