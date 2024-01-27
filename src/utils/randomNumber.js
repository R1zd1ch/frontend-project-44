export default (num1, num2 = 0) => {
  const minValue = Math.min(num1, num2);
  const maxValue = Math.max(num1, num2);

  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};
