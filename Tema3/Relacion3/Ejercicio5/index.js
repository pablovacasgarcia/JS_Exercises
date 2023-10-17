function findSaddlePoints(matrix) {
    const saddlePoints = [];
  
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        const currentElement = matrix[row][col];
        let isSaddlePoint = true;
  
        // Check if currentElement is greater than or equal to any element in its row
        for (let i = 0; i < matrix[row].length; i++) {
          if (currentElement < matrix[row][i]) {
            isSaddlePoint = false;
            break;
          }
        }
  
        // Check if currentElement is less than or equal to any element in its column
        for (let i = 0; i < matrix.length; i++) {
          if (currentElement > matrix[i][col]) {
            isSaddlePoint = false;
            break;
          }
        }
  
        // If it satisfies both conditions, it's a saddle point
        if (isSaddlePoint) {
          saddlePoints.push({ row, col });
        }
      }
    }
  
    return saddlePoints;
  }
  
  // Example 5x5 array
  const matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];
  
  const saddlePoints = findSaddlePoints(matrix);
  
  if (saddlePoints.length > 0) {
    console.log("Saddle points found at:");
    saddlePoints.forEach((point) => {
      console.log(`Row: ${point.row}, Column: ${point.col}`);
    });
  } else {
    console.log("No saddle points found.");
  }
  