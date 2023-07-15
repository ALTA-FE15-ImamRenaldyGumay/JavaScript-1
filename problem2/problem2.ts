console.log("Problem 2 - Ubah Huruf")
function ubahHuruf(sentence: string): string {
    const alphabetMapping: { [key: string]: string } = {
      A: "K",
      B: "L",
      C: "M",
      D: "N",
      E: "O",
      F: "P",
      G: "Q",
      H: "R",
      I: "S",
      J: "T",
      K: "U",
      L: "V",
      M: "W",
      N: "X",
      O: "Y",
      P: "Z",
      Q: "A",
      R: "B",
      S: "C",
      T: "D",
      U: "E",
      V: "F",
      W: "G",
      X: "H",
      Y: "I",
      Z: "J",
    };
  
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
      const currentChar = sentence[i].toUpperCase();
      const encryptedChar = alphabetMapping[currentChar] || currentChar;
      result += encryptedChar;
    }
  
    return result;
  }
  
  console.log(ubahHuruf("SEPULSA OKE")); // Output: COZEVCK YUO
  console.log(ubahHuruf("HELLO WORLD")); // Output: ROVVY GYBVN
  console.log(ubahHuruf("OPENAI GPT")); // Output: YBUHKA QBY
  