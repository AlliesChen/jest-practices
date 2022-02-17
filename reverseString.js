export default function reverseString(string) {
  if (string.match(/[a-zA-Z]/)) {
    return string.split("").reverse().join("");
  } else {
    throw new Error("Not a string");
  }
}
