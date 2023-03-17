function transpose(matrix) {
    const columns = matrix[0].length;
    const newMatrix = Array.from({length: columns}, () => [])
    for (let row of matrix) {
        for (let i = 0; i < row.length; i++) {
            newMatrix[i].push(row[i])
        }
    }
    return newMatrix
}