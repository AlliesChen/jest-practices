import calculator from "./calculator";
//Addition tests begin
test("addtion", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Concatenation", () => {
  expect(() => calculator.add("a", "b")).toThrow(Error);
});

test("addtion with floating numbers", () => {
  expect(calculator.add(0.1, 0.2)).toBe(0.3);
});
//Addition tests end

//Substraction tests begin
test("substraction", () => {
  expect(calculator.substract(3, 2)).toBe(1);
});

test("No numbers", () => {
  expect(() => calculator.substract("a", "b")).toThrow(Error);
});

test("Substract with floating numbers", () => {
  expect(calculator.substract(0.3, 0.2)).toBe(0.1);
});
//Substraction tests end

//Divison tests begin
test("Division", () => {
  expect(calculator.divide(6, 3)).toBe(2);
});

test("No numbers", () => {
  expect(() => calculator.divide("a", "b")).toThrow(Error);
});

test("Division with floating numbers", () => {
  expect(calculator.divide(0.3, 0.2)).toBe(1.5);
});
//Divison tests end

//Multiplication tests begin
test("Multiplication", () => {
  expect(calculator.multiply(6, 3)).toBe(18);
});

test("No numbers", () => {
  expect(() => calculator.multiply("a", "b")).toThrow(Error);
});

test("Multiplication with floating numbers", () => {
  expect(calculator.multiply(0.1, 0.2)).toBe(0.02);
});
//Multiplication tests end
