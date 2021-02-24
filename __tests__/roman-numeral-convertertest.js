import {minimalValue} from "./../src/roman-numeral-converter.js";

describe('converter', () => {
  test('should return minimum value in the list', () => {
    expect(minimalValue(1)).toEqual(1);
    expect(minimalValue(3)).toEqual(1);
    expect(minimalValue(5)).toEqual(5);
  })
});