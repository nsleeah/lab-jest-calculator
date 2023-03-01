const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large numbers', () => {
    expected = 8000;
    actual = sum(6000, 2000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -10;
    actual = sum(-4, -6);
    expect(actual).toBe(expected);
  });


  test('can add zero', () => {
    expected = 15;
    actual = sum(15, 0);
    expect(actual).toBe(expected);
  });

});

/////////////////////////////////////////////


describe('subtract', () => { 
  
  test('can subtract two small numbers', () => {
    expected = 5;
    actual = subtract(8, 3);
    expect(actual).toBe(expected);
  });

  test('can subtract two large numbers', () => {
    expected = 7000;
    actual = subtract(12000, 5000);
    expect(actual).toBe(expected);
  });

  test('can subtract two negatives', () => {
    expected = -2500;
    actual = subtract(-6500, -4000);
    expect(actual).toBe(expected);
  });

});

///////////////////////////////////////////////

describe('multiply', () => {
  test('can multiply two small numbers', () => {
    expected = 81;
    actual = multiply(9, 9);
    expect(actual).toBe(expected);
  });

  test('can multiply two large numbers', () => {
    expected = 220000;
    actual = multiply(22000, 10);
    expect(actual).toBe(expected);
  });

  test('can multiply with decimals', () => {
    expected = 0.35;
    actual = multiply(0.5, 0.7);
    expect(actual).toBe(expected);
  });

});

//////////////////////////////////////////////

describe('divide', () => {
  test('can divide two small numbers', () => {
    expected = 19;
    actual = divide(95, 5);
    expect(actual).toBe(expected);
  });

  test('can divide two large numbers', () => {
    expected = 2;
    actual = divide(18000, 9000);
    expect(actual).toBe(expected);
  });

  test('can divide with decimals', () => {
    expected = 1.8888888888888888;
    actual = divide(8.5, 4.5);
    expect(actual).toBe(expected);
  });
});

//////////////////////////////////////////////

describe('modulus', () => {
  test('can modulus two small numbers', () => {
    expected = 0;
    actual = modulus(20, 5);
    expect(actual).toBe(expected);
  });

  test('can modulous two large numbers', () => {
    expected = 5945;
    actual = modulus(12450, 6505);
    expect(actual).toBe(expected);
  });

  test('can modulous with decimals', () => {
    expected = 32.400000000000006;
    actual = modulus(155.8, 123.4);
    expect(actual).toBe(expected);
  });
});

//////////////////////////////////////////////

describe('even', () => {
  test('can see if two small numbers are even', () => {
    const expected = true;
    const actual = even(4, 2);
    expect(actual).toBe(expected);
  });

  test('check if even with two large numbers', () => {
    const expected = false;
    const actual = even(4665, 692);
    expect(actual).toBe(expected);
  });

  test('check if even with decimals', () => {
    const expected = false;
    const actual = even(0.9, 0.5);
    expect(actual).toBe(expected);
  });
});

//////////////////////////////////////////////

describe('odd', () => {
  test('can see if two small numbers are odd', () => {
    const expected = true;
    const actual = odd(5, 2);
    expect(actual).toBe(expected);
  });

  test('check if odd with two large numbers', () => {
    const expected = true;
    const actual = odd(49501, 49506);
    expect(actual).toBe(expected);
  });

});

//////////////////////////////////////////////
