function count(numbers) {
  let counts = 0;

  numbers.forEach((num) => {
    if (num % 2 == 0) {
      counts++;
    }
  });

  return counts;
}

function isEven(number) {
  return number % 2 == 0;
}

module.exports = {
  count,
  isEven,
};
