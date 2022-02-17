import reverseString from "./reverseString";

test("Reverse the word order", () => {
  expect(reverseString("young")).toBe("gnuoy");
});

test("Not a string", () => {
  expect(() => reverseString("3.14")).toThrow(Error);
});
