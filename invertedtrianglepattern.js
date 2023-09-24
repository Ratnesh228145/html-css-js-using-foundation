function printInvertedRightAngleTriangle(i) {
    for (let row = i; row >= 1; row--) {
      let line = '';
      for (let j = 1; j <= row; j++) {
        line += '*';
      }
      console.log(line);
    }
  }
  
  // Example: Print an inverted right-angle triangle with 5 rows
  printInvertedRightAngleTriangle(6);