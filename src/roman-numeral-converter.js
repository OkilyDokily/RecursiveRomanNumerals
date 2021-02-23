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

let backvaluesnumerals =
{
  5: "IX",
  50: "XC",
  500: "CM",
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

function convert(number) {
  let value = minimalValue(number);
  if (number <= 0) return "";

  if (backones.includes(value)) {
    if (number >= backvaluesnumeralstovalue[value]) {
      return prevs[backvaluesnumerals[value]] + convert(number - backvaluesnumeralstovalue[value]);
    }
    else {
      return decimals[value] + convert(number - value);
    }
  }
  else {
    if (number >= forwardvalues[value]) {
      return prevs[forwardvalues[value]] + convert(number - forwardvalues[value])
    }
    else {
      let returnedMany = returnMany(number, value);
      console.log(returnedMany)
      console.log(value)
      console.log(returnMany.length * value);
      return returnedMany + convert(number - (returnMany.length * value));
    }
  }
}


export function minimalValue(number) {
  return Math.max(...nums.filter(x => !(x > number)));
}

export default convert;


