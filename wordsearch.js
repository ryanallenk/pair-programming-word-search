
const transpose = function (matrix) {
    if (matrix === []) {
        return false;
    }
    let output = [];
    for (let i = 0; i < matrix[0].length; i++) {
        output.push([]);
    }
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            output[y].push(matrix[x][y]);
        }
    }
    return output;
};


const wordSearch = (letters, word) => {
    if (letters.length < 1 || word.length < 1) {
        return false;
    }
    let newArray = (transpose(letters));
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = newArray.map(ls => ls.join(""))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        } else
            for (y of verticalJoin) {
                if (y.includes(word)) {
                    return true
                }
            }
    }
    return false
};

module.exports = wordSearch