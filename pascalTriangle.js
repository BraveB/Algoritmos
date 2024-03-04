const createPascalTriangle = (rows) => {
    const pascalTriangle = [];

    for (let rowPosition = 0; rowPosition < rows; rowPosition++) {
        const row = [];
        let position = 0;

        do {
            if (position === 0 || position === rowPosition) {
                row.push(1);
            } else {
                const prevRow = pascalTriangle[rowPosition - 1];
                const value = prevRow[position - 1] + prevRow[position];
                row.push(value);
            }
            position++;
        } while (position < rowPosition + 1);

        pascalTriangle.push(row);
    }

    console.log(pascalTriangle);
};

// Test cases
createPascalTriangle(5);
createPascalTriangle(6);