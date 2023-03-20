function landPerimeter(arr) {
    let perimeter = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === "X") {
                perimeter += 4;
                if (i > 0 && arr[i - 1][j] === "X") { // check top neighbor
                    perimeter -= 1;
                }
                if (j > 0 && arr[i][j - 1] === "X") { // check left neighbor
                    perimeter -= 1;
                }
                if (i < arr.length - 1 && arr[i + 1][j] === "X") { // check bottom neighbor
                    perimeter -= 1;
                }
                if (j < arr[0].length - 1 && arr[i][j + 1] === "X") { // check right neighbor
                    perimeter -= 1;
                }
            }
        }
    }
    return `Total land perimeter: ${perimeter}`;
}