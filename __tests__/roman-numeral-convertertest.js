import {minimalValue,returnMany,convert} from "./../src/roman-numeral-converter.js";

describe('minimalValue', () => {
  test('should return minimum value in the list', () => {
    expect(minimalValue(1)).toEqual(1);
    expect(minimalValue(3)).toEqual(1);
    expect(minimalValue(5)).toEqual(5);
    expect(minimalValue(900)).toEqual(500);
    expect(minimalValue(3999)).toEqual(1000);
  });
});

describe('returnMany', () => {
  test('should return appropriate number of roman numerals', () => {
    expect(returnMany(1,1)).toEqual("I");
    expect(returnMany(3,1)).toEqual("III");
    expect(returnMany(5,5)).toEqual("V");
    expect(returnMany(1500,1000)).toEqual("M");
    expect(returnMany(600,500)).toEqual("D");
  });
});


describe('convert', () => {
  test('should successfully convert', () => {
    expect(convert(3900)).toEqual("MMMCM");
    expect(convert(499)).toEqual("CDXCIX");
    expect(convert(1)).toEqual("I");
    expect(convert(90)).toEqual("XC");
    expect(convert(1920)).toEqual("MCMXX");
    expect(convert(1699)).toEqual("MDCXCIX");
    expect(convert(1500)).toEqual("MD");
    expect(convert(1756)).toEqual("MDCCLVI");
  });
});