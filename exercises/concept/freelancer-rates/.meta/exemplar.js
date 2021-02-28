// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./annalyns-infiltration.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

/**
 * Calculates the rate per month
 *
 * @param {number} ratePerHour
 * @param {string} discount for example 20%
 * @returns {number} the rounded up monthly rate
 */
export function monthRate(ratePerHour, discount) {
  const monthly = dayRate(ratePerHour) * 22;
  const discounted = applyDiscount(monthly, discount);
  return Math.ceil(discounted);
}

/**
 * Calculates the number of days in a budget, rounded on one decimal
 *
 * @param {number} budget the total budget
 * @param {number} ratePerHour the rate per hour
 * @param {string} discount the discount to apply
 * @returns {string} the number of days
 */
export function daysInBudget(budget, ratePerHour, discount) {
  const discounted = applyDiscount(dayRate(ratePerHour), discount);
  return (budget / discounted).toFixed(1);
}

/**
 * Applies a discount to the value
 *
 * @param {number} value
 * @param {string} percentage a percentage such as '20%'
 * @returns {number} the discounted value
 */
function applyDiscount(value, percentage) {
  return ((100 - parseFloat(percentage)) / 100) * value;
}