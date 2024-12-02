// Day 1: Historian Hysteria
// https://adventofcode.com/2024/day/1

/**
 * Calculates the total difference between corresponding elements of two sorted arrays of equal length.
 * The solution to the first part of the 1st day of the Advent of Code 2024.
 *
 * The function sorts both input arrays and computes the sum of absolute differences
 * between each pair of corresponding elements.
 *
 * @param {number[]} left The first array of numbers.
 * @param {number[]} right The second array of numbers.
 * @returns {number} The sum of absolute differences between corresponding elements of the sorted arrays.
 */
function part1(left: number[], right: number[]): number {
  if (left.length !== right.length) {
    throw new Error("Input arrays must have the same length");
  }
  const sortedLeft = left.slice().sort((a, b) => a - b);
  const sortedRight = right.slice().sort((a, b) => a - b);

  let totalDifference = 0;
  for (let i = 0; i < sortedLeft.length; i++) {
    totalDifference += Math.abs(sortedLeft[i] - sortedRight[i]);
  }

  return totalDifference;
}
