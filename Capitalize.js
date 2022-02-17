export default function capitalize(string) {
  if (string.match(/[a-zA-z]/)) {
    const fst = string.charAt(0).toUpperCase();
    const follow = string.length > 1 ? string.slice(1).toLowerCase() : "";
    return fst + follow;
  } else {
    throw new Error("Not a string");
  }
}
