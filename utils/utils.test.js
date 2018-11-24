const utils = require('./utils');
const expect = require('expect')


test('should add 2 number', () => {
    const sum = utils.add(2, 4);
    expect(sum).toBe(6);
})

test('should square a number', () => {
    const square = utils.square(2);
    expect(square).toBe(4);
})

test('should add 2 number by async function', (done) => {
    utils.asyncAdd(2, 2, (sum) => {
        expect(sum).toBe(4);
        done();
    })


})

