let decimals =
{
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
};

let backones = [5, 50, 500];

let prevs =
{
  4: "IV",
  40: "XL",
  9: "IX",
  400: "CD",
  900: "CM"
};

let forwardvalues =
{
  1: 4,
  10: 40,
  100: 400
};

let nums =
  [1, 5, 10, 50, 100, 500, 1000];

let backvaluesnumeralstovalue =
{
  5: 9,
  50: 90,
  500: 900
};

function returnMany(number, num) {
  let howMany = Math.floor(number / num);
  switch (howMany) {
    case 1:
      return decimals[num];
    case 2:
      return decimals[num] + decimals[num];
    case 3:
      return decimals[num] + decimals[num] + decimals[num];
  }
}

export function overFunction(numberC){
  let emptyString = "";
  return function convert(numberC) {
    let value = minimalValue(numberC);
    if (numberC <= 0) return emptyString;
    
    if (backones.includes(value)) {
      if (numberC >= backvaluesnumeralstovalue[value]) {
        return prevs[backvaluesnumeralstovalue[value]] + convert(numberC - backvaluesnumeralstovalue[value]);
      }
      else {
        return decimals[value] + convert(numberC - value);
      }
    }
    else {
      if (numberC >= forwardvalues[value]) {
        return prevs[forwardvalues[value]] + convert(numberC- forwardvalues[value])
      }
      else {
        let returnedMany = returnMany(numberC, value);
        return returnedMany + convert(numberC - (returnedMany.length * value));
      }
    }
  };
};


export function minimalValue(number) {
  return Math.max(...nums.filter(x => !(x > number)));
}

export default overFunction;


