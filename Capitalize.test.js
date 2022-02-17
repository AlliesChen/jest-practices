import capitalize from "./Capitalize";

test("Capitalize the word", () => {
  expect(capitalize("talent")).toBe("Talent");
});

test("Not a string", () => {
  expect(() => capitalize("3.14")).toThrow(Error);
});
