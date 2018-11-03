const utils = require('./utils');

it('should add 2 number',() => {
    const sum = utils.add(2, 4);
    if(sum != 6) {
        throw new Error(`Expected 6 , but got ${sum}`)
    }
})

it('should square a number', () => {
    const square = utils.square(2);
    if(square != 4) {
        throw new Error(`Expected 4, but got ${square}`)
    }
})

