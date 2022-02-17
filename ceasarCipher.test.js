import ceasarCipher from "./ceasarCipher";

test("Lack of parameters", () => {
  expect(() => ceasarCipher("")).toThrow(Error);
});

test("Shift one place", () => {
  expect(ceasarCipher("a", 1)).toBe("b");
});

test("Shift out the bundary", () => {
  expect(ceasarCipher("zZ", 1)).toBe("aA");
});

test("Test cases", () => {
  expect(ceasarCipher("Lorem Ipsum", 25)).toBe("Knqdl Hortl");
});

test("Test punctuation", () => {
  expect(ceasarCipher("!@#$%^&*()_+", 1)).toBe("!@#$%^&*()_+", 1);
});
