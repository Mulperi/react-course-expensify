const add = (a,b) => a + b;


// JEST GLOBAL FUNCTIONS test AND expect
test('should add two numbers', () => {
    const result = add(7,4);

    expect(result).toBe(11);

    // if (result !== 11) {
    //     throw new Error(`You added 7 and 4. Result was ${result}. Expected 11.`)
    // }
});