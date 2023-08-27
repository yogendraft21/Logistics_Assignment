function shortenString(str) {
    let result = "";
    let count = 1;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        result += (count === 1 ? "" : count) + str[i];
        count = 1;
      }
    }
    return result;
  }

  function decode(str) {
    let result = "";
    let count = "";
  
    for (let char of str) {
      if (isNaN(char)) {
        result += char.repeat(Number(count) || 1);
        count = "";
      } else {
        count += char;
      }
    }
  
    return result;
  }
  
  const originalStr = "AAAAAAAAAAABWWWWWWWWWWWBB";
  const shortStr = shortenString(originalStr);
  const decodedStr = decode(shortenedStr);
  
  console.log("Original String:", originalStr);
  console.log("Shortened String:", shortStr);
  console.log("Decoded String:", decodedStr);
  