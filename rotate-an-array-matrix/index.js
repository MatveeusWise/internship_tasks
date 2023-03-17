function rotate(matrix, direction) {
    const columns = matrix[0].length;
    const rows = matrix.length;
    const newArray = Array.from({length: columns}, () => Array.from({length: rows}));
    if (direction === "counter-clockwise") {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                newArray[columns - j - 1][i] = matrix[i][j];
            }
        }
    } else if (direction === "clockwise") {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                newArray[j][rows - i - 1] = matrix[i][j];
            }
        }
    }
    return newArray;
}