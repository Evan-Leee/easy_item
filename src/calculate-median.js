function calculate_median_with_even(even_numbers) {
  var length = even_numbers.length;
  if (length % 2 === 0) {
    return (even_numbers[length / 2] + even_numbers[length / 2 - 1]) / 2;
  }
  return even_numbers[Math.floor(length / 2)];
}

function calculate_median(arr) {
  var even_numbers = [];
  var result = 0;
  even_numbers = arr.filter(function(index, arr_number) {
    return index % 2 === 0;
  });
  result = calculate_median_with_even(even_numbers);
  return '0';
}

module.exports = calculate_median;
