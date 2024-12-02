// Day 1: Historian Hysteria
// https://adventofcode.com/2024/day/1

/**
 * This function takes two arrays of integers, left and right, and returns
 * the sum of the absolute differences between corresponding elements.
 *
 * @param {number[]} left An array of integers.
 * @param {number[]} right An array of integers.
 * @returns {number} The sum of the absolute differences between
 *     corresponding elements of left and right.
 */
function part1(left: number[], right: number[]): number {
  let sorted_left = left.sort((a, b) => a - b);
  let sorted_right = right.sort((a, b) => a - b);

  let result: number[] = [];
  for (let i = 0; i < sorted_left.length; i++) {
    let a: number = sorted_left[i];
    let b: number = sorted_right[i];

    result.push(Math.abs(a - b));
  }
  let sum: number = 0;
  result.forEach((v) => (sum += v));
  return sum;
}
