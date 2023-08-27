function chai(n, k, g, b) {
    const result = [];
    
    while (n > 0) {
      if (g > 0 && result.length < k) {
        result.push("Green");
        g--;
        n--;
      } else if (b > 0) {
        result.push("Black");
        b--;
        n--;
      } else {
        return [];
      }
      
      if (result.length === k) {
        g = Math.min(g, k);
      }
    }
    
    return result;
  }
  
  console.log(chai(5, 1, 3, 2));
  console.log(chai(4, 3, 4, 0));
  