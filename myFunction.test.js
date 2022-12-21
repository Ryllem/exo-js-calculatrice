const solve = require('./myFunction')

  test('2+2x4 should be egal to "10"', () => {
    expect(solve("2+2x4")).toBe("10");
  }); 

  test('2+2x4x10÷2+33-4 should be egal to "71"', () => {
    expect(solve("2+2x4x10÷2+33-4")).toBe("71");
  }); 

  test('2+2x4÷0 should be egal to "10"', () => {
    expect(solve("2+2x4÷0")).toBe("10÷0");
  }); 

  test('5x5+18 should be egal to "43"', () => {
    expect(solve("5x5+18÷0uu")).toBe("43");
  }); 