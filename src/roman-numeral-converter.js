let numerals =
{
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

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

let nums =
  [1, 5, 10, 50, 100, 500, 1000];

let backones = [5, 50, 500];
let prevsarray = [10, 100, 1000];

let prevs =
{
  5: "IV",
  50: "XL",
  10: "IX",
  500: "CD",
  1000: "CM"
};

let backvalues =
{
  5: 4,
  50: 40,
  500: 400
};

let backvaluesnumerals =
{
  5:"IX",
  50:"XC",
  500:"CM",
}

let backvaluesnumeralstovalue =
{
  5:9,
  50:90,
  500:900
}

let minusValues =
{
  10: 9,
  100: 90,
  1000: 900,
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

function returnPreviousSymbols(num,recurse) {
  return [prevs[num]];
}

function convert(number) {
  let value = minimalValue(number);

  if (backones.includes(value)) {
    if(isThree(number))
    {
      let recursedValued = returnMany(number, value);
      let newnum = value + (numerals[recursedValued[0]]*recursedValued.length);
      return recursedValued + convert(newnum); 
    }
    else
    {
      let newnum =  number - backvaluesnumeralstovalue[value];
      return getBackValueForBackOnesList(value) + convert(newnum);
    }
  }
}

function getBackValueForBackOnesList(value)
{
  return backvaluesnumerals[value]
}

function isPrev(number) {
  let value = minimalValue(number);
  let prev = nums[nums.indexOf(value) - 1];
  let more = nums[nums.indexOf(value) + 1];

  let minusValue = minusValues[more];
  return (value + (prev * 3)) >= minusValue;
}


function minimalValue(number) {
  return Math.max(nums.filter(x => !(x > number)));
}

function isThree(number) {
  let value = minimalValue(number);
  let moreValue = nums[nums.indexOf(value) + 1];
  return !(number >= backvalues[moreValue]);
}

