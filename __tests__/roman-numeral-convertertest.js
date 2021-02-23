import {minimalValue} from "./../src/roman-numeral-converter.js";

describe('converter', () => {
  test('should return minimum value in the list', () => {
    expect(minimalValue(1)).toEqual(1);
    expect(minimalValue(3)).toEqual(1);
    expect(minimalValue(5)).toEqual(5);
  })

  // test('should return correct values on closed functions', () => {
  //   const coinCounter = new CoinCounter();
  //   let builder = coinCounter.OuterFunction(169);
  //   expect(builder("quarter")).toEqual(6);
  //   expect(builder("dime")).toEqual(16);
  //   expect(builder("nickel")).toEqual(33);
  //   expect(builder("penny")).toEqual(169);
  // })
});