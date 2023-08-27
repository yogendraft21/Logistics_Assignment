function find_gt_lt_values(matrix) {
    const values = [];
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const currentValue = matrix[i][j];
        let flag = true;
  
        for (let k = 0; k < matrix[i].length; k++) {
          if (currentValue < matrix[i][k]) {
            flag = false;
            break;
          }
        }

        for (let k = 0; k < matrix.length; k++) {
          if (currentValue > matrix[k][j]) {
            flag = false;
            break;
          }
        }
  
        if (flag) {
          values.push(currentValue);
        }
      }
    }
  
    return values;
  }
  
  const matrix = [
    [7, 8, 7],
    [5, 4, 2],
    [8, 6, 7]
  ];
  
  const result = find_gt_lt_values(matrix);
  console.log("Values:", result);
  