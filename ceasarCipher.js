export default function ceasarCipher(scripts, key) {
  if (!scripts) {
    throw new Error("Missing scripts, usage: ceasarCipher(scripts,key)");
  } else if (!key) {
    throw new Error("Missing key, usage: ceasarCipher(scripts,key)");
  } else {
    const letters = scripts
      .split("")
      .map((c) => {
        let ascii = c.charCodeAt(0);
        if (ascii > 64 && ascii < 91) {
          ascii = ascii + key > 90 ? ((ascii + key) % 90) + 64 : ascii + key;
          c = String.fromCharCode(ascii);
        } else if (ascii > 96 && ascii < 123) {
          ascii = ascii + key > 122 ? ((ascii + key) % 122) + 96 : ascii + key;
          c = String.fromCharCode(ascii);
        }
        return c;
      })
      .join("");
    return letters;
  }
}
